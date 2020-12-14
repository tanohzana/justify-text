
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    res.status(400);
    res.end();
    return;
  }

  let token = jwt.sign({ email }, JWT_SECRET);

  res.status(201);
  res.send({ token });
};

export default generateToken;
