// src/app.ts
import express, { Application } from 'express';
import customerRoutes from './routes/customerRoutes';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', customerRoutes);

export default app;
