CREATE DATABASE IF NOT EXISTS cantinadb;

USE cantinadb;

CREATE TABLE IF NOT EXISTS productos(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pedidos(
  id INT NOT AUTO_INCREMENT
  fecha TIMESTAMP 
  precioTotal DECIMAL(10,2) 
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pedido_items(
  itempedido_id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT,
  producto_id INT,
  product_name VARCHAR(255),
  quantity INT,
  price DECIMAL(10, 2),
  subtotal DECIMAL(10, 2),
  FOREIGN KEY (order_id) REFERENCES pedidos(id),
  FOREIGN KEY (product_id) REFERENCES productos(id)
);

INSERT INTO productos (nombre, precio) VALUES
  ('Coca-Cola', 200),
  ('Sprite', 300);
  ('Pepsi', 250),
  ('Hamburguesa', 1000),
  ('Fanta', 280),
  ('Agua', 300);
  ('Sandwich', 550);
  