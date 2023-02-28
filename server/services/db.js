import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const db = {
    connect: async function (database) {
        console.log("Connecting to DB: " + database);
        return await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: database || process.env.DB
        });
    }
  };

export default db;