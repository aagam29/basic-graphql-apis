import { PORT } from './constants/secrets';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/schema';
import { resolvers } from './resolvers/fetchResolvers';

async function bootstrapStandAloneServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  console.log(`🚀 GraphQL Server ready at: ${url}`);
}
bootstrapStandAloneServer();

// SAME SERVER WITH EXPRESS

// import { expressMiddleware } from '@apollo/server/express4';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
// import express from 'express';
// import http from 'http';
// import cors from 'cors';
// import bodyParser from 'body-parser';

// async function bootstrapExpressServer() {
//   const app = express();
//   const httpServer = http.createServer(app);
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//   });
//   await server.start();
//   app.use(
//     '/',
//     cors(),
//     bodyParser.json(),
//     expressMiddleware(server, {
//       context: async ({ req }) => ({ token: req.headers.token }),
//     }),
//   );

//   await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));

//   console.log(`🚀 GraphQL Server ready at http://localhost:${PORT}/`);
// }

// bootstrapExpressServer();