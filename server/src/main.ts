import express from 'express';
import { config } from './config';
import routes from './routes';

const app = express();
const { SERVER_PORT } = config;

// Requests parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on the port ${SERVER_PORT}`);
});