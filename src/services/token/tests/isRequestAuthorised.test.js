import isRequestAuthorised from '../isRequestAuthorised';

describe('isRequestAuthorised function', () => {
  it('should return true if the token was never saved', () => {
    const string = 'this is a test string';

    const isAuthorised = isRequestAuthorised('testToken', string);

    expect(isAuthorised).toBeTruthy();
  });

  it('should return false if the number of words is reached', () => {
    const string1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer suscipit viverra lorem, eu molestie urna suscipit at. Phasellus in ornare metus,
      venenatis finibus erat. In vulputate semper dignissim. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Nulla ligula est, molestie a urna at, facilisis sollicitudin est. Quisque malesuada
      euismod vehicula. Proin viverra eleifend rhoncus. Duis quis consequat est, et tristique elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit viverra lorem,
      eu molestie urna suscipit at. Phasellus in ornare metus, venenatis finibus erat. In vulputate semper dignissim.
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer suscipit viverra lorem, eu molestie urna suscipit at. Phasellus in ornare metus,
      venenatis finibus erat. In vulputate semper dignissim. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Nulla ligula est, molestie a urna at, facilisis sollicitudin est. Quisque malesuada
      euismod vehicula. Proin viverra eleifend rhoncus. Duis quis consequat est, et tristique elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit viverra lorem,
      eu molestie urna suscipit at. Phasellus in ornare metus, venenatis finibus erat. In vulputate semper dignissim.
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    `; // 281 words

    const isAuthorised1 = isRequestAuthorised('testToken', string1);
    const isAuthorised2 = isRequestAuthorised('testToken', string1);

    expect(isAuthorised1).toBeTruthy();
    expect(isAuthorised2).toBeFalsy();
  });
});