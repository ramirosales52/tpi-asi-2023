import { Router } from "express";
import { 
  getProductos, 
  getProductoById, 
  getProductosCount, 
  saveProducto, 
  deleteProducto, 
  updateProducto, 
} from "../controllers/productos";

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Productos
 *  description: Productos endpoints
 */

/**
 * @swagger
 * /productos:
 *  get:
 *    summary: Get all Productos
 *    tags: [productos]
 */
router.get('/productos', getProductos)

/**
 * @swagger
 * /productos/count:
 *  get:
 *    summary: Get total Productos counter
 *    tags: [productos]
 */
router.get('/productos/count', getProductosCount)

/**
 * @swagger
 * /productos/:id:
 *  get:
 *    summary: Get Producto by ID
 *    tags: [productos]
 */
router.get('/productos/:id', getProductoById)

/**
 * @swagger
 * /productos:
 *  post:
 *    summary: Create new Producto
 *    tags: [productos]
 */
router.post('/productos', saveProducto)

/**
 * @swagger
 * /productos/:id:
 *  delete:
 *    summary: Delete Producto by ID
 *    tags: [productos]
 */
router.delete('/productos/:id', deleteProducto)

/**
 * @swagger
 * /productos/:id:
 *  put:
 *    summary: Update Producto by ID
 *    tags: [productos]
 */
router.put('/productos/:id', updateProducto)


export default router
