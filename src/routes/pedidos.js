import { Router } from "express";
import { 
  deletePedido, 
  getPedidoById, 
  getPedidos, 
  savePedido 
} from "../controllers/pedidos";

const router = Router()

router.get('/pedidos', getPedidos)

router.get('/pedidos/:id', getPedidoById)

router.post('/pedidos', savePedido)

router.delete('/pedidos/:id', deletePedido)

export default router