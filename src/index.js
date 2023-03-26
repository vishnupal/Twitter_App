import express from 'express';
import passport from 'passport';

import { connect } from './config/database.js';
import apiRoutes from './routes/index.js';
import { passportAuth } from './config/jwt-middleware.js';

const app = express();

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server Start on port ${PORT}`);
  await connect();
  console.log('Mongo db connected');
});
