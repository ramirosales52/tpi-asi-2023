const API = 'http://192.168.0.244:3000/productos'

export const getProductos = async () => {
  const res = await fetch(API)
  return await res.json()
}

export const savePedido = async (newPedido) => {
  const res = await fetch('http://192.168.0.244:3000/pedidos', {
    method: 'POST', 
    headers: {Accept: 'application/json', 'Content-type': 'application/json'},
    body: JSON.stringify(newPedido)
  })
  return await res.json()
}