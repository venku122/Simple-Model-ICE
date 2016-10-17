const controllers = require('./controllers');

const router = function (app) {
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/page3', controllers.page3);

  app.get('/', controllers.index);

  app.get('/*', controllers.notFound);
};

// export the router function
module.exports = router;
