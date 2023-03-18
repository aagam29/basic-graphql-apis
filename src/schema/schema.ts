import gql from 'graphql-tag';

export const typeDefinitions = gql`
  type Query {
    getAllBooks: [Book]
  }
  
  type Book {
    title: String
    author: String
  }
`;