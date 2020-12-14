
const REQUESTS_NUMBER = {};
const WORDS_LIMIT = 800;

const isRequestAuthorised = (token, string) => {
  if (REQUESTS_NUMBER[token]) {
    REQUESTS_NUMBER[token]+= string.split(' ').length;
  } else {
    REQUESTS_NUMBER[token] = string.split(' ').length;
  }

  return (REQUESTS_NUMBER[token] < WORDS_LIMIT);
};

export default isRequestAuthorised;
