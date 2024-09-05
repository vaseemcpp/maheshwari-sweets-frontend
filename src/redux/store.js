import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import categoryReducer from "../redux/features/categoryAndBrand/categoryAndBrandSlice"
import productReducer from "../redux/features/product/productSlice";
import couponReducer from "../redux/features/coupon/couponSlice";
import filterReducer from '../redux/features/product/filterSlice'
import cartReducer from '../redux/features/cart/cartSlice';
import checkoutReducer from '../redux/features/checkout/checkoutSlice'
import orderReducer from '../redux/features/order/orderSlice'
import transactionReducer from '../redux/features/transaction/transactionSlice'
export const store = configureStore({
    reducer:{
         auth: authReducer,
         product: productReducer,
         category: categoryReducer,
         filter:filterReducer,
         coupon: couponReducer,
         cart:cartReducer,
         checkout: checkoutReducer,
         order:orderReducer,
         transaction:transactionReducer,

    }
})