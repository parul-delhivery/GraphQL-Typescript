// import { users } from "../../database/mockdb";
import {users, UserDetails} from "../../database/mockdb";
import { User } from "../generated/graphql";

// interface User {
//   name: string
//   email: string
// }

// let userDetails = new UserDetails();
export const resolvers = {
        Query: {
          users: async () => UserDetails.users,
        },
        Mutation: {
          createUser: (parent: undefined, args: User) => {
            const newUser = args
            UserDetails.users.push(newUser) 
            return newUser
          }
        }
      };
