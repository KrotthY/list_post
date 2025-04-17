import express from 'express'
import { ErrorHandler } from './shared/error/error_handler.js';
import PublicationRoutes from './publications/routes/publication_route.js'
import config from './shared/config/index.js';
import helmet from 'helmet';
import cors from 'cors'

const app = express();

var corsOptions = {
  origin: 'http://localhost:5173',
}


app.use(helmet())

app.use(cors(corsOptions))

app.use(express.json());
app.use('/api/v1',PublicationRoutes)
app.use(ErrorHandler)


app.listen(config.port,()=>{
  console.log('Listen server',config.port)
})