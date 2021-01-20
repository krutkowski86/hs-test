const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('./src/api/music.json');
const middlewares = jsonServer.defaults();
const users = JSON.parse(fs.readFileSync('./src/api/user.json', 'UTF-8'));

const SECRET_KEY = '1122334455';
const TOKEN_EXPIRE_TIME = '1h';

server.use(middlewares);
server.use(bodyParser.json());

server.use(/^((?!\/user\/login).)*$/, (req, res, next) => {
  const invalidHeader = req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer';
  if (invalidHeader) {
    res.status(401).json({ message: 'Unathorized' });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

server.post('/user/login', (req, res) => {
  const { email, password } = req.body;
  if (isValidUser(email, password) === false) {
    const status = 401;
    const message = 'Invalid user data';
    res.status(status).json({ status, message });
    return;
  }
  const token = createToken({ email, password });
  res.status(200).json({ jwt: token });
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function isValidUser(email, password) {
  return users.list.findIndex((user) => user.email === email && user.password === password) > -1;
}

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRE_TIME });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err));
}
