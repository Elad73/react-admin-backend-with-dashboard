import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();
console.log("Setting up db... creating connection.");
console.log("db host: " + process.env.DB_HOST);

const db = (database) => {
    if(database) return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database
    });
    else return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
}

export const getConn = (database) => {
    if(database) return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database
    });
    else return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
}

export const db_query = (conn, query) => {

    conn.query(query, (err, result) => {
        if (err) { console.log(err); }
        console.log(result);
    });
}

console.log("db connection success");

export default db;


