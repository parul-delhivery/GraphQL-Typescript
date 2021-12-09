export const users = [
        {
          name: 'Octavio Flores',
          email: 'oflores@zcorp.com'
        },
        {
          name: 'Farah Bennis',
          email: 'fbennis@zcorp.com'
        },
      ];

interface User {
        name: string
        email: string
        address: Address[]
      } 
interface Address {
      permanent: boolean
      firstLine: string
}    
export class UserDetails {
    public static users: User[] = [
    {
      name: 'Octavio Flores',
      email: 'oflores@zcorp.com',
      address: [{permanent: true, firstLine: 'bla bla'}, {permanent: false, firstLine: 'abc abc'}]
    },
    {
      name: 'Farah Bennis',
      email: 'fbennis@zcorp.com',
      address: [{permanent: false, firstLine: 'dca dca'}]
    },
  ];

}

