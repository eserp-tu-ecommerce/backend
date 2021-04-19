import 'graphql-import-node';
import typeDefs from './schemaAdmin.graphql';
import resolvers from './../resolvers/resolversMapAdmin';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

 const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})


export default schema;