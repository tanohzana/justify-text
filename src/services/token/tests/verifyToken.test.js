
import verifyToken from '../verifyToken';
import isRequestAuthorised from '../isRequestAuthorised';

jest.mock('../isRequestAuthorised');

describe('verifyToken function', () => {
  const req = { body: {} };
  const res = {
    status: jest.fn(),
    send: jest.fn(),
    end: jest.fn(),
  };
  const next = jest.fn();

  it('should return error 401 if no token is provided', () => {
    verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
  });

  it('should return error 402 if token is not authorised', () => {
    isRequestAuthorised.mockImplementation(() => false);
    req.headers = { authorization: 'Bearer blablabla' };

    verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(402);
  });

  it('should call next is token is provided and authorised', () => {
    isRequestAuthorised.mockImplementation(() => true);
    req.headers = { authorization: 'Bearer blablabla' };

    verifyToken(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});