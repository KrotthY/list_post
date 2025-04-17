import express from 'express'
import { ErrorHandler } from './shared/error/error_handler.js';
import PublicationRoutes from './publications/routes/publication_route.js'
import config from './shared/config/index.js';

const app = express();

app.use(express.json());
app.use('/api/v1',PublicationRoutes)
app.use(ErrorHandler)

app.listen(config.port,()=>{
  console.log('Listen server',config.port)
})