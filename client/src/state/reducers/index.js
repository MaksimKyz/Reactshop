import { configureStore } from "@reduxjs/toolkit";
import auth from './auth'
import cart from './cart'
export default configureStore({
    reducer:{
        auth,
        cart
    }
})