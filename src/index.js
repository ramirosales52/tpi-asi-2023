import app from "./app";
import './database'
import { config as dotenv } from 'dotenv';
dotenv()

app.listen(process.env.NODE_DOCKER_PORT)

console.log('Server on port', process.env.NODE_DOCKER_PORT)