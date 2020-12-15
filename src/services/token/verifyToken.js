
import dotenv from 'dotenv';
import isRequestAuthorised from './isRequestAuthorised';

dotenv.config();

const verifyToken = (req, res, next) => {
  try {
    let token = (req.headers.authorization || '').split(' ')[1];

    if (!token) {
      throw new Error('No token provided');
    }

    const string = req.body;

    const isAuthorised = isRequestAuthorised(token, string);

    // If words count overflow
    if (!isAuthorised) {
      res.status(402);
      res.end();
      return;
    }

    next();
  } catch(e) {
    console.log(e);
    res.status(401);
    res.end('wrong token');
  }
};

export default verifyToken;
