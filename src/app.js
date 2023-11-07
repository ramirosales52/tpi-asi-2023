import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pedidosRoutes from './routes/productos';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import { options } from './swaggerOptions';

const specs = swaggerJSDoc(options)

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(pedidosRoutes)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app
