import express from 'express';
import setupAddRoutes from "./add";

function setupRoutes(app) {
  const addRouter = express.Router();
  setupAddRoutes(addRouter);
  app.use('/add', addRouter);

  app.use('/', (req, res) => res.send("Hello!"));
}

export default setupRoutes;
