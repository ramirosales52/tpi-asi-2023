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

//-----------------------------------------------------------------------

export const getPedidos = async (req, res) => {
  const connection = await connect()
  const [rows]= await connection.query('SELECT * FROM pedidos')
  res.json(rows)
}
export const savePedido = async (req, res) => {
  const connection = await connect();
  const cartItems = req.body;

  console.log(cartItems)

  const [results] = await connection.query(
    'INSERT INTO pedidos (fecha, precioTotal) VALUES (NOW(), ?)',
    [0]
  );

  const pedidoId = results.insertId;

  cartItems.map(async(item) => {
    const [productResults] = await connection.query('SELECT * FROM productos WHERE id = ?', [item.id]);
    
    const productData = productResults[0];
  
    const subtotal = productData.precio * item.quantity;

    await connection.query(
      'INSERT INTO pedido_items (pedido_id, producto_id, product_name, quantity, price, subtotal) VALUES (?, ?, ?, ?, ?, ?)',
      [pedidoId, item.id, productData.nombre, item.quantity, productData.precio, subtotal]
      );
    await connection.query(
      'UPDATE pedidos SET precioTotal = (SELECT SUM(subtotal) FROM pedido_items WHERE pedido_id = ?) WHERE id = ?',
      [pedidoId, pedidoId]
    );
  })  
};
export const deletePedido = async (req, res) => {
  const connection = await connect()
  await connection.query('DELETE FROM pedidos WHERE id = ?', [
    req.params.id
  ])
  res.sendStatus(204)
}