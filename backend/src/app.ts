import express from 'express';
import payments from './routes/payments';

const app = express();

app.use(express.json());
app.use('/payments', payments);

export default app;
