
// I save it in the session so we don't have to run an sqlite db...
const REQUESTS_NUMBER = {};
// 80000 was a bit too much to test the API, so I decided to set it to 400
// I hope you don't mind...
const WORDS_LIMIT = 400;

const isRequestAuthorised = (token, string) => {
  if (REQUESTS_NUMBER[token]) {
    if (REQUESTS_NUMBER[token].lastModified < new Date().setHours(0,0,0,0)) {
      REQUESTS_NUMBER[token] = {
        count: 0,
        lastModified: new Date(),
      };
    }

    REQUESTS_NUMBER[token].count += string.split(' ').length;
    REQUESTS_NUMBER[token].lastModified = new Date();
  } else {
    REQUESTS_NUMBER[token] = {
      count: string.split(' ').length,
      lastModified: new Date(),
    };
  }

  return (REQUESTS_NUMBER[token].count < WORDS_LIMIT);
};

export default isRequestAuthorised;
