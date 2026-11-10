# Genera los datos de práctica del curso "Datos con IA" (public/datos/practica/).
# Siempre salen iguales (semilla fija): las lecciones citan resultados que dependen de estos datos.
# Uso: python tools/generar-datos-practica.py   (necesita openpyxl). Imprime los resultados que usan las lecciones.
import csv, json, random, datetime, os
from collections import defaultdict
from openpyxl import Workbook
from openpyxl.styles import Font

R = random.Random(20250601)
SALIDA = os.path.join(os.path.dirname(__file__), '..', 'public', 'datos', 'practica')
os.makedirs(SALIDA, exist_ok=True)

PRODUCTOS = {
    'Bebidas': [('Agua 2 L', 900), ('Gaseosa 1,5 L', 2100), ('Jugo en polvo', 450), ('Cerveza lata', 1600)],
    'Almacén': [('Yerba 1 kg', 4800), ('Fideos 500 g', 1300), ('Arroz 1 kg', 1700), ('Aceite 900 ml', 3200)],
    'Limpieza': [('Lavandina 1 L', 1100), ('Detergente 750 ml', 1900), ('Papel higiénico x4', 2600)],
    'Frescos': [('Leche 1 L', 1400), ('Queso cremoso kg', 9800), ('Pan kg', 2900), ('Huevos x12', 3400)],
}
# Cuánto vende cada sucursal: Centro es la más grande; Norte crece mes a mes; Sur estuvo cerrada del 7 al 20 de abril.
BASE = {'Centro': 2.2, 'Norte': 1.0, 'Sur': 1.4}
PAGOS = ['Efectivo', 'Débito', 'Crédito', 'QR']

filas = []
dia = datetime.date(2025, 1, 1)
while dia <= datetime.date(2025, 6, 30):
    for suc, base in BASE.items():
        if suc == 'Sur' and datetime.date(2025, 4, 7) <= dia <= datetime.date(2025, 4, 20):
            continue
        mes = dia.month
        intensidad = base * (1 + 0.12 * (mes - 1) if suc == 'Norte' else 1) * (1.25 if dia.weekday() >= 4 else 1)
        n = max(0, int(R.gauss(intensidad, 0.6) + 0.5))
        for _ in range(n):
            cat = R.choices(list(PRODUCTOS), weights=[3, 4, 2, 3])[0]
            prod, precio = R.choice(PRODUCTOS[cat])
            # El QR crece con los meses y el efectivo baja
            pesos = [max(1, 6 - mes), 4, 3, 1 + mes]
            filas.append({
                'fecha': dia, 'sucursal': suc, 'categoria': cat, 'producto': prod,
                'cantidad': R.choice([1, 1, 1, 2, 2, 3, 4, 6]), 'precio_unitario': precio,
                'medio_pago': R.choices(PAGOS, weights=pesos)[0],
                'cliente': R.choices(['Habitual', 'Nuevo'], weights=[3, 1])[0],
            })
    dia += datetime.timedelta(days=1)
for i, f in enumerate(filas, 1):
    f['id_venta'] = f'V{i:04d}'
    f['total'] = f['cantidad'] * f['precio_unitario']

COLUMNAS = ['id_venta', 'fecha', 'sucursal', 'categoria', 'producto', 'cantidad', 'precio_unitario', 'total', 'medio_pago', 'cliente']

# ---- Versión sucia: los errores típicos de una planilla real, puestos a propósito y anotados
sucias = [dict(f) for f in filas]
problemas = defaultdict(list)
idx = R.sample(range(len(sucias)), 40)
def toma(k):
    return [idx.pop() for _ in range(k)]
for i in toma(5):
    sucias[i]['cantidad'] = ''; sucias[i]['total'] = ''; problemas['cantidad vacía'].append(sucias[i]['id_venta'])
for i, escrito in zip(toma(8), ['sur', 'Sur ', 'NORTE', 'norte', 'Centro ', 'centro', 'SUR', 'Norte ']):
    problemas['sucursal mal escrita'].append(f"{sucias[i]['id_venta']} ('{escrito}')"); sucias[i]['sucursal'] = escrito
for i in toma(10):
    problemas['fecha en otro formato'].append(sucias[i]['id_venta']); sucias[i]['fecha'] = sucias[i]['fecha'].strftime('%d/%m/%Y')
for i in toma(6):
    p = sucias[i]['precio_unitario']
    sucias[i]['precio_unitario'] = '$' + f'{p:,}'.replace(',', '.'); problemas['precio escrito como texto'].append(sucias[i]['id_venta'])
i = toma(1)[0]
while sucias[i]['cantidad'] in ('', None) or sucias[i]['cantidad'] != 4:
    i = toma(1)[0] if idx else i
sucias[i]['cantidad'] = 400; sucias[i]['total'] = 400 * filas[i]['precio_unitario']
problemas['cantidad imposible (400 en vez de 4)'].append(sucias[i]['id_venta'])
duplicadas = R.sample(range(len(sucias)), 6)
for j in sorted(duplicadas, reverse=True):
    sucias.insert(j + 1, dict(sucias[j])); problemas['fila duplicada'].append(sucias[j]['id_venta'])

def texto(f, col):
    v = f[col]
    return v.isoformat() if isinstance(v, datetime.date) else v

def escribir(nombre, datos, hoja):
    with open(os.path.join(SALIDA, nombre + '.csv'), 'w', newline='', encoding='utf-8-sig') as a:
        w = csv.writer(a)
        w.writerow(COLUMNAS)
        for f in datos:
            w.writerow([texto(f, c) for c in COLUMNAS])
    libro = Workbook(); h = libro.active; h.title = hoja
    h.append(COLUMNAS)
    for c in h[1]: c.font = Font(bold=True)
    for f in datos:
        h.append([texto(f, c) for c in COLUMNAS])
    for col, ancho in zip('ABCDEFGHIJ', [10, 12, 10, 11, 20, 9, 15, 10, 12, 10]):
        h.column_dimensions[col].width = ancho
    libro.save(os.path.join(SALIDA, nombre + '.xlsx'))

escribir('ventas-sucias', sucias, 'ventas')

# ---- Versión limpia: lo que queda después de limpiar bien (las vacías se sacan y la de 400 se corrige a 4)
vacias = set(problemas['cantidad vacía'])
limpias = [dict(f) for f in filas if f['id_venta'] not in vacias]
escribir('ventas-limpias', limpias, 'ventas')

# ---- Resultados que citan las lecciones
def suma(datos, clave):
    r = defaultdict(int)
    for f in datos: r[clave(f)] += f['total']
    return dict(r)
total = sum(f['total'] for f in limpias)
por_suc = suma(limpias, lambda f: f['sucursal'])
por_mes = suma(limpias, lambda f: f['fecha'].month)
por_cat = suma(limpias, lambda f: f['categoria'])
norte_mes = suma([f for f in limpias if f['sucursal'] == 'Norte'], lambda f: f['fecha'].month)
sur_mes = suma([f for f in limpias if f['sucursal'] == 'Sur'], lambda f: f['fecha'].month)
pago_mes = defaultdict(lambda: defaultdict(int))
for f in limpias: pago_mes[f['fecha'].month][f['medio_pago']] += 1
qr = {m: round(100 * pago_mes[m]['QR'] / sum(pago_mes[m].values())) for m in pago_mes}
ticket = {s: round(sum(f['total'] for f in limpias if f['sucursal'] == s) / sum(1 for f in limpias if f['sucursal'] == s)) for s in BASE}
totales_ordenados = sorted(f['total'] for f in limpias)
mediana = totales_ordenados[len(totales_ordenados) // 2]
promedio = round(total / len(limpias))
suc_sucias = sorted({f['sucursal'] for f in sucias})
print(json.dumps({
    'filas_sucias': len(sucias), 'filas_limpias': len(limpias), 'total_limpio': total,
    'por_sucursal': por_suc, 'por_mes': por_mes, 'por_categoria': por_cat,
    'norte_por_mes': norte_mes, 'sur_por_mes': sur_mes, 'qr_pct_por_mes': qr,
    'ticket_promedio_por_sucursal': ticket, 'promedio_venta': promedio, 'mediana_venta': mediana,
    'total_sucio_sumando_tal_cual': sum(f['total'] for f in sucias if f['total'] != ''),
    'sucursales_distintas_en_sucias': suc_sucias, 'problemas': problemas,
}, ensure_ascii=False, indent=1, default=str))
