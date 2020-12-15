import generateToken from '../generateToken';

describe('generateToken function', () => {
  const req = { body: {} };
  const res = {
    status: jest.fn(),
    send: jest.fn(),
    end: jest.fn(),
  };

  it('should return status 201 when an email is provided', () => {
    req.body = { email: 'yes@yes.com' };

    generateToken(req, res, null);

    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('should return a token', () => {
    let token = null;
    req.body = { email: 'yes@yes.com' };

    res.send = jest.fn((result) => {
      token = result.token;
      return;
    });

    generateToken(req, res, null);

    expect(token).not.toBeNull();
  });

  it('should return a 400 error when no email is provided', () => {
    req.body = {};

    generateToken(req, res, null);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});