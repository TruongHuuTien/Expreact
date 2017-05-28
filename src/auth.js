import express from 'express';
import mysqlConnector from 'mysql';
import config from './config.js';
import userModel from './models/user.js';
const jwt = require('jsonwebtoken');

const router = express.Router();

const mysql = mysqlConnector.createConnection(config.db);
mysql.connect();

router.post('/login', (req, res) => {
  // Check parameters
  if (req.body == undefined || req.body.user == undefined) {
    res.status(400).send('No parameter: user');
    return false;
  }
  if (req.body.user.email == null || req.body.user.email == '') {
    res.status(400).send('parameter empty: user.email');
    return false;
  }
  if (req.body.user.password == null || req.body.user.password == '') {
    res.status(400).send('parameter empty: user.password');
    return false;
  }

  // user object
  const user = {
    email: req.body.user.email,
    password: req.body.user.password
  }

  // Check
  const queryCheck = `SELECT user_id, password, email FROM user_auth WHERE email='${user.email}'`;
  mysql.query(queryCheck, (err, result) => {
    if (result.length == 0) {
      res.status(401).send('No user with this email');
      return false;
    }
    console.log(result);
    if (result[0].password !== user.password) {
      res.status(401).send('wrong password');
      return false;
    }
    const token = jwt.sign({ user: {id:result[0].user_id, email:result[0].email} }, 'interaction');
    res.send({jwt: token});
    return true;
  });
});

module.exports = router;
