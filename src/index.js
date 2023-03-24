import express from 'express';
import { connect } from './config/database.js';
import service from './services/tweet-service.js';

const app = express();

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server Start on port ${PORT}`);
  await connect();
  console.log('Mongo db connected');
  const ser = new service();
  await ser.create({
    content: 'Hi #PaRTy kesi bolti public matchre bhidu log ',
  });
});
