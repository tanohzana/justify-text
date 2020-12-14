
import express from 'express';
import dotenv from 'dotenv';

import justifyText from './services/text/justifyText';
import generateToken from './services/token/generateToken';
import verifyToken from './services/token/verifyToken';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.text());
app.use(express.json());

const run = () => {
  app.post('/api/token', generateToken);

  app.use(verifyToken);

  app.post('/api/justify', justifyText);

  app.listen(PORT, () => console.log(`Magic is happening on port ${PORT}`));
};

run();
