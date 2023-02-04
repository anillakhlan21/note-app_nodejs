import express, { json } from 'express'
import { DataBaseConfig } from './config/db.config';
import { MainRoutes } from './routes/main.routes';
var bodyParser = require('body-parser')

export const app = express();
DataBaseConfig.connectMongoDB();
app.use(bodyParser.json())
app.use('/api/v1',MainRoutes.register());

app.listen(4000,()=>{
    console.log('app running on port 4000');
})