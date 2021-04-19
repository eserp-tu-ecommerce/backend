import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store.admin';

const queryAdmin: IResolvers = {
    Query: {
        categorias(): any {
            return database.categories;
        }
        ,
        productos(): any {
            return database.products;
        }
    }
}

export default queryAdmin;