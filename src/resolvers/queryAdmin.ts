import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store.admin';

const queryAdmin: IResolvers = {
    Query: {
        categories(): any {
            return database.categories;
        }
        ,
        category(__: void, { id }): any {
            const resultado =  database.categories.filter(categoria => categoria.id === id) [0];
            if(resultado === undefined) {
                return {
                      id: '-1',
                      name: `No se a encontrado la categoria con el ID ${id}`,
                      type: '',
                      icon: '',
                      slug: '',
                     number_of_product: 0,
                     creation_date: ''
                }
            }else {
                return resultado;
            }
        }
        ,
        products(): any {
            return database.products;
        },
        product(__: void, { id }): any {
            const resultado =  database.products.filter(product => product.id === id) [0];
            if(resultado === undefined) {
                return {
                      id: '-1',
                      name: `No se a encontrado el producto con el ID ${id}`,
                      image: '',
                      type: '',
                      unit: 0,
                      categories: [],
                      price: 0,
                      salePrice: 0,
                      discountInPercent: 0,
                      per_unit: 0,
                      quantity: 0,
                      views: 0,
                      sales: 0,
                     description: '',
                     slug: ''
                }
            } else {
                return resultado;
            }
        }
        ,
        coupons(): any {
            return database.coupons;
        }
        ,
        coupon(__: void, { id }): any {
            const resultado =  database.coupons.filter(coupon => coupon.id === id) [0];
            if(resultado === undefined) {
                return {
                    id: '-1',
                    title: `No se a encontrado el cupon con el ID ${id}`,
                    number_of_coupon: 0,
                    number_of_used_coupon: 0,
                    discount_in_percent: 0,
                    products: [],
                    code: '',
                    minimum_amount: null,
                    status: '',
                    expiration_date: null,
                    description: '',
                    creation_date: null
                }
            } else {
                return resultado;
            }
        }
    }
}

export default queryAdmin;