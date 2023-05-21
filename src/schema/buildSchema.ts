import { typeDefs } from './schema';
import { DocumentNode, GraphQLSchema } from 'graphql';

export async function buildSchema() {
  const finalSchema: Array<GraphQLSchema | DocumentNode> = [];
  finalSchema.push(typeDefs);
  return finalSchema

}