import { Router } from "express";
import { getPedidoItems } from "../controllers/pedidoItems";

const router = Router()

router.get('/pedido/productos/:id', getPedidoItems)

export default router