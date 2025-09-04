import { connect } from '../database'

export const getPedidoItems = async (req, res) => {
  const connection = await connect()
  const [rows] = await connection.query('SELECT * FROM pedido_items WHERE pedido_id = ?', [
    req.params.id
  ])
  res.json(rows)
}