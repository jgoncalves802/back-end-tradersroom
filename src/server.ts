import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import schema from './schemas';

import './database';
import './database/models/users';
  
  const server = new ApolloServer ({ 
    schema,
    context:({req}) => {
      const context = {
        req,
        token: req?.headers?.authorization || '',
      }
      
      return context;
    }
  });


  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
    
   });