import { connect } from '../database'

export const getPedidos = async (req, res) => {
  const connection = await connect()
  const [rows]= await connection.query('SELECT * FROM pedidos')
  res.json(rows)
}
export const getPedidoById = async (req, res) => {
  const connection = await connect()
  const [rows]= await connection.query('SELECT * FROM pedidos WHERE id = ?', [
    req.params.id
  ])
  res.json(rows[0])
}
export const getPedidosCount = async (req, res) => {
  const connection = await connect()
  const [rows]= await connection.query('SELECT COUNT(*) FROM pedidos')
  res.json(rows[0]['COUNT(*)'])
}
export const savePedido = async (req, res) => {
  const connection = await connect()
  const [results] = await connection.query('INSERT INTO pedidos(nombre, precio) VALUES (?,?)', [
    req.body.nombre,
    req.body.precio
  ])
  res.json({
    id: results.insertId,
    ...req.body
  })
}
export const deletePedido = async (req, res) => {
  const connection = await connect()
  await connection.query('DELETE FROM pedidos WHERE id = ?', [
    req.params.id
  ])
  res.sendStatus(204)
}
export const updatePedido = async (req, res) => {
  const connection = await connect()
  await connection.query('UPDATE pedidos SET ? WHERE id = ?', [
    req.body,
    req.params.id
  ])
  res.sendStatus(204)
}