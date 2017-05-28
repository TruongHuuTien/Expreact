import mysqlConnector from 'mysql';
import config from '../config.js';

const mysql = mysqlConnector.createConnection(config.db);
mysql.connect();

const user = {

  // GET /users
  getUserCollection(req, res) {
    const query = `SELECT id as id, name as name FROM user`;
    mysql.query(query, (err, rows) => {
      const result = rows;
      res.send(result);
    });
    return true;
  },

  // POST /user
  createUser(req, res) {
    // Check parameters
    if (req.body == undefined || req.body.user == undefined) {
      res.status(400).send('No parameter: user');
      return false;
    }
    if (req.body.user.name == null || req.body.user.name == '') {
      res.status(400).send('parameter empty: user.name');
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
      name: req.body.user.name,
      email: req.body.user.email,
      password: req.body.user.password
    }

    // Check if already exist
    const queryCheck = `SELECT user_id FROM user_auth WHERE email='${user.email}'`;
    mysql.query(queryCheck, (err, result) => {
      if (result.length > 0) {
        res.status(400).send('email already exist');
        return false;
      }

      //Insert
      const queryUser = `INSERT INTO user (name) VALUES ('${user.name}')`;
      mysql.query(queryUser, (err, result) => {
        if (err) throw err;
        const userId = result.insertId
        const queryAuth = `INSERT INTO user_auth (user_id, email, password) VALUES ('${userId}', '${user.email}', '${user.password}')`;
        mysql.query(queryAuth, (err, result) => {
          if (err) throw err;
          res.send('ok');
        });
      });
    });
    return true;
  }
}

export default user;
