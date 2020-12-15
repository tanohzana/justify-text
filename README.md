
[![Codecov Coverage](https://img.shields.io/codecov/c/github/tanohzana/justify-text/&lt;main.svg?style=flat-square)](https://codecov.io/gh/tanohzana/justify-text/)

# Justify text

A NPM package to justify text.

It requires a token that limits the number of words to 400 per day.

## Test the app online

The app is running here :

https://justify-text-app.herokuapp.com/

⚠️ It uses a free dyno on Heroku, so you need to allow it a few seconds to turn the dyno on after your first request.

## To run the project

To run the project, create a `.env` file with the field `JWT_SECRET` and add a random string to it.

## To run the tests

`npm run test`

## API

### Token

> POST /api/token

Mandatory body field (JSON) :

- email

Returns :

- token (JWT)

### Justify (with Authorisation)

> POST /api/justify

Mandatory body field (text) :

- string

Returns :

- justifiedString

## Coverage

Find the project test coverage here :

https://codecov.io/gh/tanohzana/justify-text/
