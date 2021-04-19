import { IResolvers } from 'graphql-tools';
import queryAdmin from './queryAdmin';

const resolversMap : IResolvers = {
    ...queryAdmin
}

export default resolversMap;