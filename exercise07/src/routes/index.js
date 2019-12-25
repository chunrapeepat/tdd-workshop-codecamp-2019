import express from 'express';
import setupAddRoutes from "./add";
import setupDisplayRoutes from "./display";

function setupRoutes(app) {
  const addRouter = express.Router();
  setupAddRoutes(addRouter);
  app.use('/add', addRouter);

  const displayRouter = express.Router();
  setupDisplayRoutes(displayRouter);
  app.use('/', displayRouter);
}

export default setupRoutes;
