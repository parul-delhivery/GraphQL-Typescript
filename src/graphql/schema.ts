const { gql } = require('apollo-server');

export const typeDefs = gql`
    type User {
      name: String
      email: String
      address: [Address] 
    }
    type Address {
      permanent: Boolean!
      firstLine: String
    }
    input AddressInput {
      permanent: Boolean!
      firstLine: String
    }

    # queries:
    type Query {
      users: [User]
    }

    # mutations:
    type Mutation {
      createUser(name:String!, email: String!, address: [AddressInput]): User!
    }
  `;