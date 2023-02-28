import dotenv from 'dotenv';

dotenv.config();
const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    // database: env.DB_NAME,
    waitForConnections: true,
    // connectionLimit: env.DB_CONN_LIMIT,
    queueLimit: 0,
    // debug: env.DB_DEBUG
  },
//   listPerPage: env.LIST_PER_PAGE,
};
  
export default config;