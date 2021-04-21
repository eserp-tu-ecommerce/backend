import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import __ from 'lodash';
import { database } from '../data/data.store.admin';

const mutation : IResolvers = {

    Mutation: {

    createProduct(__:void, { product }): any {
        const ItemProducto = {
            id: String(database.products.length + 1),
            name: product.name,
            image: product.image,
            type: product.type,
            unit: product.unit,
            categories: product.categories,
            price: product.price,
            salePrice: product.salePrice,
            discountInPercent: product.discountInPercent,
            per_unit: product.per_unit,
            quantity: product.quantity,
            views: product.views,
            sales: product.sales,
            description: product.description,
            creation_date: product.creation_date,
            slug: product.slug
        }

        if(database.products.filter(itemProducto => itemProducto.name === product.ItemProducto.name).length === 0 )  {
            database.products.push(ItemProducto);
            return ItemProducto;
        }
        return {
            id: '-1',
            name: `Producto ID ${product.id} Ya Existe no puede ser ingresado!`,
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
          } ;
       
    }
    ,
    createCategory(__:void, { category }): any {
        const Item = {
            id: String(database.categories.length + 1),
            name: category.name,
            type: category.type,
            icon: category.icon,
            slug: category.slug,
            number_of_product: category.number_of_product,
            creation_date: category.creation_date
        }

        if(database.categories.filter(item => item.name === category.Item.name).length === 0 )  {
            database.categories.push(Item);
            return Item;
        } 

        return {
            id: '-1',
            name: `Categoria ID ${category.id} ya Existe no puede ser eliminada!`,
            type: '',
            icon: '',
            slug: '',
            number_of_product: 0,
            creation_date: ''
         } 
        
    },
    createCoupon(__:void, { coupon }): any {
        const Item = {
            id: String(database.coupons.length + 1),
            title: coupon.title,
            number_of_coupon: coupon.number_of_coupon,
            number_of_used_coupon: coupon.number_of_used_coupon,
            discount_in_percent: coupon.discount_in_percent,
            category: coupon.category,            
            products: coupon.products,
            code: coupon.code,
            minimum_amount: coupon.minimum_amount,
            status: coupon.status,
            expiration_date: coupon.expiration_date,
            description: coupon.description,
            creation_date: coupon.creation_date
        }
        if(database.coupons.filter(item => item.title === coupon.Item.title).length === 0 )  {
            database.coupons.push(Item );
            return Item ;
        }
        return {
            id: '-1',
            title: `Cupon ID ${coupon.id} Ya Existe no puede ser eliminado!`,
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
         
     },
    createStaff(__:void, { staff }): any {
        const Item = {
            id: String(database.staffs.length + 1),
            first_name: staff.first_name,
            last_name: staff.last_name,
            contact_number: staff.contact_number,
            email: staff.email,
            role: staff.role,
            name: staff.name,
            creation_date: staff.creation_date
        }
        if(database.staffs.filter(item => (Item.name+' '+Item.first_name+' '+Item.last_name) === (staff.name+' '+staff.first_name+' '+staff.last_name)).length === 0 )  {
            database.staffs.push(Item);
          return Item;
        } 

        return {
            id: '-1',
            title: `Staff ID ${staff.id} ya Existe no puede ser eliminado!`,
            number_of_staff: 0,
            number_of_used_staff: 0,
            discount_in_percent: 0,
            products: [],
            code: '',
            minimum_amount: null,
            status: '',
            expiration_date: null,
            description: '',
            creation_date: null
       } 

    },
    deleteProduct(__:void, { id }): any {

        const delProduct = _.remove(database.products, function (producto) {
            return producto.id === id;
        });

        if(delProduct[0] === undefined) {
                  return {
                      id: '-1',
                      name: `Producto ID ${id} no Existe no puede ser eliminado!`,
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
                    } ;
        }  
        
        return delProduct[0];
    },
    deleteCategory(__:void, { id }): any {

        const delCategory = _.remove(database.categories, function (category) {
            return category.id === id;
        });

        if(delCategory[0] === undefined) {
                return {
                    id: '-1',
                    name: `Categoria ID ${id} no Existe no puede ser eliminada!`,
                    type: '',
                    icon: '',
                    slug: '',
                number_of_product: 0,
                creation_date: ''
            } 
        }
        
        return delCategory[0];
    },
    deleteCoupon(__:void, { id }): any {

        const delCoupon = _.remove(database.coupons, function (coupon) {
            return coupon.id === id;
        });

        if(delCoupon[0] === undefined) {
                return {
                    id: '-1',
                    title: `Cupon ID ${id} no Existe no puede ser eliminado!`,
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
        }
        
        return delCoupon[0];
    },
    deleteStaff(__:void, { id }): any {

        const delStaff = _.remove(database.staffs, function (staff) {
            return staff.id === id;
        });

        if(delStaff[0] === undefined) {
               return {
                    id: '-1',
                    title: `Staff ID ${id} no Existe no puede ser eliminado!`,
                    number_of_staff: 0,
                    number_of_used_staff: 0,
                    discount_in_percent: 0,
                    products: [],
                    code: '',
                    minimum_amount: null,
                    status: '',
                    expiration_date: null,
                    description: '',
                    creation_date: null
               } 
        } 
        
        return delStaff[0];
    },
    updateProduct(__:void, { producto }): any {
        const elementoExiste = _.findIndex(database.products, function (o) {
            return o.id = producto.id;
        });
        if(elementoExiste > -1) {
          const imagen = database.products[elementoExiste].image;
          producto.image = imagen;
          
          
          // ------------------------- codigo nuevo 
           
          const name = database.products[elementoExiste].name;
          producto.name = name;
          
          // -------------------------
          
          database.products[elementoExiste] = producto;

          return database.products[elementoExiste];
        }  
        return {
            id: '-1',
            name: `Producto ID ${producto.id} no Existe no puede ser actualizado!`,
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
    },
    updateCategory(__:void, { category }): any {
        const elementoExiste = _.findIndex(database.categories, function (o) {
            return o.id = category.id;
        });
        if(elementoExiste > -1) {
          const icon = database.categories[elementoExiste].icon;
          category.icon = icon;
          database.categories[elementoExiste] = category;
          return database.categories[elementoExiste];
        }  
        return {
            id: '-1',
            name: `Categoria ID ${category.id} no Existe no puede ser actualizada!`,
            type: '',
            icon: '',
            slug: '',
             number_of_product: 0,
             creation_date: ''
         } 
    },
    updateCoupon(__:void, { coupon }): any {
        const elementoExiste = _.findIndex(database.coupons, function (o) {
            return o.id = coupon.id;
        });
        if(elementoExiste > -1) {
          const description = database.coupons[elementoExiste].description;
          coupon.description = description;
          database.categories[elementoExiste] = coupon;

          return database.coupons[elementoExiste];
        }  

        return {
            id: '-1',
            title: `Cupon ID ${coupon.id} no Existe no puede ser actualizado!`,
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
    },
    updateStaff(__:void, { staff }): any {
        const elementoExiste = _.findIndex(database.staffs, function (o) {
            return o.id = staff.id;
        });
        if(elementoExiste > -1) {
          const name = database.staffs[elementoExiste].name;
          staff.name = name;
          database.staffs[elementoExiste] = staff;

          return database.staffs[elementoExiste];
        }  

        return {
            id: '-1',
            name: `Staff ID ${staff.id} no Existe no puede ser actualizado!`,
            type: '',
            icon: '',
            slug: '',
             number_of_product: 0,
             creation_date: ''
         } 
    }

  }
  
}

export default mutation;