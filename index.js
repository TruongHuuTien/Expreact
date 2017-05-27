import express from 'express';
import config from './src/config';

const app = express();

app.listen(config.port, () => {
  console.info(`The server is running at http://localhost:${config.port}/`);
});
