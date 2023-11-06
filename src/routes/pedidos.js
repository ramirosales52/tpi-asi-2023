import { Router } from "express";
import { 
  getPedidos, 
  getPedidoById, 
  getPedidosCount, 
  savePedido, 
  deletePedido, 
  updatePedido 
} from "../controllers/pedidos";

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Pedidos
 *  description: Pedidos endpoints
 */

/**
 * @swagger
 * /pedidos:
 *  get:
 *    summary: Get all Pedidos
 *    tags: [Pedidos]
 */
router.get('/pedidos', getPedidos)

/**
 * @swagger
 * /pedidos/count:
 *  get:
 *    summary: Get total Pedidos counter
 *    tags: [Pedidos]
 */
router.get('/pedidos/count', getPedidosCount)

/**
 * @swagger
 * /pedidos/:id:
 *  get:
 *    summary: Get Pedido by ID
 *    tags: [Pedidos]
 */
router.get('/pedidos/:id', getPedidoById)

/**
 * @swagger
 * /pedidos:
 *  post:
 *    summary: Create new Pedido
 *    tags: [Pedidos]
 */
router.post('/pedidos', savePedido)

/**
 * @swagger
 * /pedidos/:id:
 *  delete:
 *    summary: Delete Pedido by ID
 *    tags: [Pedidos]
 */
router.delete('/pedidos/:id', deletePedido)

/**
 * @swagger
 * /pedidos/:id:
 *  put:
 *    summary: Update Pedido by ID
 *    tags: [Pedidos]
 */
router.put('/pedidos/:id', updatePedido)


export default router
