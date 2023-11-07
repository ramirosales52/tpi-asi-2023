import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productosRoutes from './routes/productos';
import pedidosRoutes from './routes/pedidos';
import pedidoItemsRoutes from './routes/pedidoItems';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import { options } from './swaggerOptions';

const specs = swaggerJSDoc(options)

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(pedidosRoutes)
app.use(productosRoutes)
app.use(pedidoItemsRoutes)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app
