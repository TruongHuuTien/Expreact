import path from 'path';
import express from 'express';
import config from './src/config';
import pageRoutes from './src/routes/page.js';
import apiRoutes from './src/routes/api.js';

const app = express();

app.use('/api', apiRoutes);
app.use(pageRoutes);

app.listen(config.port, () => {
  console.info(`The server is running at http://localhost:${config.port}/`);
});
