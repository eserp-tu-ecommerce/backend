import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store.admin';
import _ from 'lodash';

const typeAdmin: IResolvers = {
        Product: {
            categories: parent => {
                 const categoriasLista : Array<any> = [];
                 parent.categories.map((categoria: string) => {
                    categoriasLista.push(_.filter(database.categories, ['id', categoria])[0])
                 });
                 return categoriasLista;
            },
            image: parent => `https://firebasestorage.googleapis.com/v0/b/tuecommerce-9aca3.appspot.com/o/productos%2F100x100%2F${parent.image}?alt=media&token=1894f626-2f2a-4097-8486-6b149e55a321`

           

        }
        
        

        // ,
        // Category: {
        //     products: parent => {
        //         const productsList : Array<any> = [];
        //         const idCategory = parent.id;
        //         database.products.map((product: any) => {
        //             if(product.categories.filter ( (id: any) => id === idCategory) > 0) {
        //                 productsList.push(product)
        //             }
        //         });
        //         return productsList;
        //    },
        //    image: parent => `https://firebase.google.com/${parent.image}`
        // }

  
}

export default typeAdmin;