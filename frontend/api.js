const IP = 'http://192.168.0.244:3001/'

export const getProductos = async () => {
  const res = await fetch(IP + 'productos')
  return await res.json()
}

export const getPedidos = async () => {
  const res = await fetch(IP + 'pedidos')
  return await res.json()
}

export const getPedidoItems = async (id) => {
  const res = await fetch(`${IP}pedido/productos/${id}`)
  return await res.json()
}

export const savePedido = async (newPedido) => {
  const res = await fetch(IP + 'pedidos', {
    method: 'POST', 
    headers: { Accept: 'application/json', 'Content-type': 'application/json' },
    body: JSON.stringify(newPedido)
  })
  return await res.json()
}