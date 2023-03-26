import express from 'express';
import { connect } from './config/database.js';
import apiRoutes from './routes/index.js';

const app = express();

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server Start on port ${PORT}`);
  await connect();
  console.log('Mongo db connected');
});
