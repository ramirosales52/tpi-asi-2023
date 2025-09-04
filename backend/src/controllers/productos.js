import { connect } from '../database'

export const getProductos = async (req, res) => {
  const connection = await connect()
  const [rows]= await connection.query('SELECT * FROM productos')
  res.json(rows)
}

export const getProductoById = async (req, res) => {
  const connection = await connect()
  const [rows]= await connection.query('SELECT * FROM productos WHERE id = ?', [
    req.params.id
  ])
  res.json(rows[0])
}

export const getProductosCount = async (req, res) => {
  const connection = await connect()
  const [rows]= await connection.query('SELECT COUNT(*) FROM productos')
  res.json(rows[0]['COUNT(*)'])
}

export const saveProducto = async (req, res) => {
  const connection = await connect()
  const [results] = await connection.query('INSERT INTO productos(nombre, precio) VALUES (?,?)', [
    req.body.nombre,
    req.body.precio
  ])
  res.json({
    id: results.insertId,
    ...req.body
  })
}

export const deleteProducto = async (req, res) => {
  const connection = await connect()
  await connection.query('DELETE FROM productos WHERE id = ?', [
    req.params.id
  ])
  res.sendStatus(204)
}

export const updateProducto = async (req, res) => {
  const connection = await connect()
  await connection.query('UPDATE productos SET ? WHERE id = ?', [
    req.body,
    req.params.id
  ])
  res.sendStatus(204)
}

