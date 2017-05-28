import mysqlConnector from 'mysql';
import config from '../config.js';

const mysql = mysqlConnector.createConnection(config.db);
mysql.connect();

const user = {
  getCollection(req, res) {
    const query = `SELECT id as id, name as name FROM user`;
    mysql.query(query, (err, rows) => {
      const result = rows;
      res.send(result);
    });
    return true;
  }
}

export default user;
