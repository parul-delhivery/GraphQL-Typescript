const { gql } = require('apollo-server');

export const typeDefs = gql`
    type User {
      name: String
      email: String
    }
    # queries:
    type Query {
      users: [User]
    }

    # mutations:
    type Mutation {
      createUser(name:String!, email: String!): User!
    }
  `;

