import express from 'express';
import dotenv from 'dotenv';
import justifyText from './services/text/justifyText';
import generateToken from './services/token/generateToken';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

const run = () => {
  app.post('/api/justify', justifyText);

  app.post('/api/token', generateToken);

  app.listen(PORT, () => console.log(`Magic is happening on port ${PORT}`));
};

run();