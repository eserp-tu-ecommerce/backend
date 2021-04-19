import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store.admin';
import _ from 'lodash';

const typeAdmin: IResolvers = {
        Product: {
            categorias: parent => {
                 const categoriasLista : Array<any> = [];
                 parent.categorias.map((categoria: string) => {
                    categoriasLista.push(_.filter(database.categories, ['id', categoria])[0])
                 });
                 return categoriasLista;
            }
        }
  
}

export default typeAdmin;