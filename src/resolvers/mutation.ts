import { IResolvers } from 'graphql-tools';
import __ from 'lodash';
import { database } from '../data/data.store.admin';

const mutation: IResolvers = {

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

        database.products.push(ItemProducto);
        return ItemProducto;
    },
    createCategory(__:void, { category }): any {
        const ItemCategory = {
            id: String(database.categories.length + 1),
            name: category.name,
            type: category.type,
            icon: category.icon,
            slug: category.slug,
            number_of_product: category.number_of_product,
            creation_date: category.creation_date

        }

        database.categories.push(ItemCategory);
        return ItemCategory;
    },
    createCoupon(__:void, { coupon }): any {
        const ItemCoupon = {
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

         database.coupons.push(ItemCoupon);
         return ItemCoupon;
     },
    createStaff(__:void, { staff }): any {
        const ItemStaff = {
            id: String(database.staffs.length + 1),
            first_name: staff.first_name,
            last_name: staff.last_name,
            contact_number: staff.contact_number,
            email: staff.email,
            role: staff.role,
            name: staff.name,
            creation_date: staff.creation_date
        }
        database.staffs.push(ItemStaff);
        return ItemStaff;
    },
    
    // updateProduct(product: AddProductInput!): Product!
    // updateCategory(category: AddCategoryInput!): Category!
    // updateCoupon(coupon: AddCouponInput!): Coupon!
    // updateStaff(staff: AddStaffInput!): Staff!
  
    // deleteProduct(product: AddProductInput!): Product!
    // deleteCategory(category: AddCategoryInput!): Category!
    // deleteCoupon(coupon: AddCouponInput!): Coupon!
    // deleteStaff(staff: AddStaffInput!): Staff!
  

  

}

export default mutation;