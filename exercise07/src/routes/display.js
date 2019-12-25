import * as displayController from '../controllers/display';

function setupDisplayRoutes(router) {
  router.get("/", displayController.displayTask);
}

export default setupDisplayRoutes
