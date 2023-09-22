const Hapi = require('@hapi/hapi');
const routes = require('./Route');
// kriteria 1 port 9000
// kriteria 2 npm run start 'start': 'node src/Server.js'
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
