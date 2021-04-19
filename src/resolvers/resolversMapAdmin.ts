import { IResolvers } from 'graphql-tools';
import mutation from './mutation';
import queryAdmin from './queryAdmin';
import typeAdmin from './typeAdmin';

const resolversMap : IResolvers = {
    ...queryAdmin,
    ...mutation,
    ...typeAdmin
}

export default resolversMap;