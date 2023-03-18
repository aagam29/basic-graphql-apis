import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefinitions } from './schema/schema';
import { resolvers } from './resolvers/fetchResolvers';

async function bootstrapBackendServer() {
  const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });

  console.log(`🚀 GraphQL Server ready at: ${url}`);
}

bootstrapBackendServer();