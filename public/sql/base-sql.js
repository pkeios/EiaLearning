// Base de ejemplo del curso "SQL para hacer preguntas a los datos": el almacén de Sole, en Paraná.
// El laboratorio SQL (montarLabSQL en app.js) la crea de cero en cada ejecución; tools/test-sql.js usa la misma.
window.BASE_SQL = `
CREATE TABLE productos (
  id INTEGER PRIMARY KEY,
  nombre TEXT NOT NULL,
  categoria TEXT,
  precio INTEGER,
  stock INTEGER
);
INSERT INTO productos (id, nombre, categoria, precio, stock) VALUES
  (1, 'Yerba 1 kg', 'Almacén', 3900, 25),
  (2, 'Azúcar 1 kg', 'Almacén', 1400, 40),
  (3, 'Leche 1 L', 'Lácteos', 1300, 30),
  (4, 'Queso cremoso 1 kg', 'Lácteos', 9800, 5),
  (5, 'Galletitas de agua', 'Almacén', 1100, 60),
  (6, 'Gaseosa 2,25 L', 'Bebidas', 3200, 18),
  (7, 'Agua mineral 2 L', 'Bebidas', 1500, 0),
  (8, 'Pan lactal', 'Panadería', 2900, 12),
  (9, 'Dulce de leche 400 g', 'Lácteos', 2600, 8),
  (10, 'Fideos 500 g', 'Almacén', 1200, 50);

CREATE TABLE clientes (
  id INTEGER PRIMARY KEY,
  nombre TEXT NOT NULL,
  barrio TEXT
);
INSERT INTO clientes (id, nombre, barrio) VALUES
  (1, 'Ana López', 'Centro'),
  (2, 'Bruno Díaz', 'San Agustín'),
  (3, 'Carla Ruiz', 'Centro'),
  (4, 'Diego Sosa', 'Bajada Grande'),
  (5, 'Elena Paz', NULL);

CREATE TABLE ventas (
  id INTEGER PRIMARY KEY,
  fecha TEXT,
  cliente_id INTEGER REFERENCES clientes(id),
  producto_id INTEGER REFERENCES productos(id),
  cantidad INTEGER
);
INSERT INTO ventas (id, fecha, cliente_id, producto_id, cantidad) VALUES
  (1, '2026-03-02', 1, 1, 2),
  (2, '2026-03-02', 2, 3, 4),
  (3, '2026-03-03', 1, 4, 1),
  (4, '2026-03-03', 3, 6, 2),
  (5, '2026-03-04', 4, 1, 1),
  (6, '2026-03-04', 2, 9, 3),
  (7, '2026-03-05', 3, 8, 2),
  (8, '2026-03-05', 1, 3, 2),
  (9, '2026-03-06', 4, 10, 5),
  (10, '2026-03-06', 2, 1, 1),
  (11, '2026-03-07', 3, 4, 1),
  (12, '2026-03-07', 1, 6, 1);
`;
