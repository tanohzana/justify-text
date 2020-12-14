
const REQUESTS_NUMBER = {};
const WORDS_LIMIT = 80000;

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
