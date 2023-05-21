import gql from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String
    contacts: [Contact]
    created_at: String
    updated_at: String
  }

  input UserInput {
    id: ID!
    name: String!
    email: String!
    phone: String
    created_at: String
    updated_at: String
  }

  type Contact {
    id: ID!
    name: String!
    email: String
    phone: String
    users: User!
    contact_label: [ContactLabel]
    created_at: String!
    updated_at: String!
  }

  type Label {
    id: ID!
    name: String!
    contact_label: [ContactLabel]
    created_at: String!
    updated_at: String!
  }

  type ContactLabel {
    contact_id: Int
    label_id: Int
    contacts: Contact
    labels: Label
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    user(id: ID!): User
    contact_label(contact_id: ID!, label_id: ID!): ContactLabel
    contact(id: ID!): Contact
    label(id: ID!): Label
    allUsers: [User!]!
    allContactLabels: [ContactLabel!]!
    allContacts: [Contact!]!
    allLabels: [Label!]!
  }

  type Mutation {
    createUser(user: UserInput!): User
    createContact(name: String!, email: String, phone: String, user_id: ID!): Contact
    createLabel(name: String!): Label
    addLabelToContact(contact_id: ID!, label_id: ID!): Contact
  }
`;