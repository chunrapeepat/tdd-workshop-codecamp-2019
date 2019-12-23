import * as addController from '../controllers/add';

function setupAuthRoutes(router) {
  router.post("/", addController.addTask);
}

export default setupAuthRoutes
