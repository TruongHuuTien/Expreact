import express from 'express';
import mysqlConnector from 'mysql';
import config from '../config.js';

const mysql = mysqlConnector.createConnection(config.db);
mysql.connect();

const expressRouter = express.Router();

expressRouter.get('/users', (req, res) => {
  const query = `SELECT id as id, name as name FROM user`;
  mysql.query(query, (err, rows) => {
    const result = rows;
    res.send(result);
  });
  return true;
});

module.exports = expressRouter;
