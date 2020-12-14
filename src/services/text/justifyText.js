
import isRequestAuthorised from '../token/isRequestAuthorised';

const LINES_LEN = 80;

const justifyText = (req, res, next) => {
  const string = req.body;
  let token = (req.headers.authorization || '').split(' ')[1];

  const isAuthorised = isRequestAuthorised(token, string);

  // If words count overflow
  if (!isAuthorised) {
    res.status(402);
    res.end();
    return;
  }

  // If no string is provided, return 400
  if (!string) {
    res.status(400);
    res.end();
    return;
  }

  // If string is small, send back easy
  if (string.length < LINES_LEN) {
    let justifiedString = string;

    res.status(201);
    res.send(justifiedString);
    return;
  }

  let justifiedString = '';
  let parts = string.split(' ');
  let currentString = '';

  for (let i=0; i<parts.length; i++) {
    currentString += parts[i];

    if (parts[i+1] && (currentString + parts[i+1]).length > (LINES_LEN - 2)) { // (LINES_LEN - 2) for \n
      while (currentString < (LINES_LEN - 2)) {
        currentString += ' ';
      }

      currentString += '\n';
      justifiedString += currentString;
      currentString = '';
    } else {
      currentString += ' ';
    }
  };

  res.status(201);
  res.send(justifiedString);
};

export default justifyText;
