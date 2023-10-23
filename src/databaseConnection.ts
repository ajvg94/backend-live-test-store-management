import { Sequelize }  from "sequelize-typescript";
import Employee from './models/employee';

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSOWRD = process.env.DB_PASSOWRD;

const databaseConnection =  new Sequelize({
    dialect: 'postgres',
    host: DB_HOST,
    port: (DB_PORT)? +DB_PORT : 5432,
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSOWRD,
    models: [Employee]
});

export default databaseConnection;
