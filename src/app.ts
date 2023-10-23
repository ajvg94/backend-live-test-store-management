import express from 'express';
import 'reflect-metadata'
import 'dotenv/config'
import databaseConnection from './databaseConnection'
import {router as employeeRoutes} from './routes/employee'

const app = express();
app.use(express.json());

app.use(employeeRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
    databaseConnection.sync({force:true});
    console.log(`App listening on port: ${PORT}`);
})