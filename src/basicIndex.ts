import { PORT } from './constants/secrets';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { gql } from 'graphql-tag';

const schema = gql`
  type Product {
    id: ID!
    name: String
    category: String
  }
  type Query {
    getProductById(id: ID!): Product
    getAllProducts: [Product]
  }
`;

const products = [
  {
    id: '1',
    name: 'Daikin 1.5T',
    category: 'Air Conditioners',
  },
  {
    id: '2',
    name: 'God Of War',
    category: 'Gaming',
  }
];

const resolvers = {
  Query: {
    getAllProducts: () => products,
    getProductById: (parent, args, contextValue, info) => products.find((product) => args.id === product.id)
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

startStandaloneServer(server, { listen: { port: PORT } }).then(({ url }) => {
  console.log(`🚀 Apollo Server listening at: ${url}`);
});

