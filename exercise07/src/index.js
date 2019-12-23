import express from "express";
import bodyParser from 'body-parser';

import setupRoutes from './routes';

async function startServer({port = process.env.SERVER_PORT} = {}) {
  const app = express()
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());

  setupRoutes(app)

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      console.log(`[Log] Listening on port ${server.address().port}`);

      const originalClose = server.close.bind(server);
      resolve(server);
    })
  })
}

startServer({port: 8888});

