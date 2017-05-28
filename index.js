import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import config from './src/config';
import api from './src/api.js';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', api);

app.listen(config.port, () => {
  console.info(`The server is running at http://localhost:${config.port}/`);
});
