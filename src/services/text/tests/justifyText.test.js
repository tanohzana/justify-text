import justifyText from '../justifyText';

const LINES_LEN = 80;

describe('justifyText function', () => {
  const req = { body: {} };
  const res = {
    status: jest.fn(),
    send: jest.fn(),
  };

  it('should return status 201 when a string is provided', () => {
    req.body = 'this is a test';

    justifyText(req, res, null);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('should return a function with 80 chars per line', () => {
    let justifiedText = null;
    req.body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit viverra lorem, eu molestie urna suscipit at. Phasellus in ornare metus, venenatis finibus erat. In vulputate semper dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ligula est, molestie a urna at, facilisis sollicitudin est. Quisque malesuada euismod vehicula. Proin viverra eleifend rhoncus. Duis quis consequat est, et tristique elit.';

    res.send = jest.fn((resText) => {
      justifiedText = resText;
      return;
    })

    justifyText(req, res, null);

    justifiedText.split('\n').forEach(part => {
      console.log(part);
      expect(part.length).toBeLessThanOrEqual(LINES_LEN);
    });
  });

  it('should return a 400 error when no string is provided', () => {
    req.body = '';

    justifyText(req, res, null);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});