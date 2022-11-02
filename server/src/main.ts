import express from 'express';
import { config } from './config';
import routes from './routes';
import cors from 'cors';
import { db } from './models';

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

// Routes
app.use('/api', routes);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on the port ${SERVER_PORT}`);
});