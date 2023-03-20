import express from 'express';
import cors from 'cors';
import { testFactory } from '../controllers/test';

const app = express();

app.use(cors());
app.use(express.json());
app.use(testFactory());

export default app;