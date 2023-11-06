CREATE DATABASE IF NOT EXISTS cantinadb;

USE cantinadb;

CREATE TABLE IF NOT EXISTS pedidos(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL NOT NULL, 
  PRIMARY KEY (id)
);

INSERT INTO pedidos (nombre, precio) VALUES
  ('Coca-Cola', 200),
  ('Sprite', 300);
  