import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import productRouter from './routes/productRoutes.js';

const app = express();

// Get the current directory from the import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __config = path.dirname(__filename);
// Use path.resolve to construct the path to the .env file
dotenv.config({ path: path.resolve(__config, './../config.env') });

const __dirname = path.resolve();

app.use(express.json());

app.use('/api/v1/products', productRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

console.log('Process', process.env.NODE_ENV);

export default app;
