import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from './routes/user.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
console.log("Setting up routes");
app.use("/user", userRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));