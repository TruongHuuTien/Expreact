import path from 'path';
import express from 'express';
import config from './src/config';
import route from './src/routes';

const app = express();

app.use(route);

app.listen(config.port, () => {
  console.info(`The server is running at http://localhost:${config.port}/`);
});
