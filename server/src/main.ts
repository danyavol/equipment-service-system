import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { config } from './config';
import { db } from './models';
import routes from './routes';

const app = express();
const { SERVER_PORT, CLIENT_PORT } = config;

// Create tables in db if they don't exist
db.sequelize.sync();

app.use(cors({
    origin: [`http://localhost:${CLIENT_PORT}`],
    credentials: true
}));

// Requests parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api', routes);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on the port ${SERVER_PORT}`);
});