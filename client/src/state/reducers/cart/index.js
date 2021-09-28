import { createSlice } from "@reduxjs/toolkit";


const isCart = createSlice({
    name: 'IsCart',
    initialState: {
        cart: localStorage.getItem('cart')
            ?JSON.parse(localStorage.getItem('cart'))
            :[]
    },
    reducers: {
        add_cart(state, action) {
            let newObj = {'count': 1, ...action.payload};
            state.cart.push(newObj)
        },
        delete_cart(state, action) {
            state.cart=state.cart.filter(cart=>cart.id !== action.payload.id)
            },
        add_count(state,action){
            state.cart.forEach(item => {
                if(item.id == action.payload.id){
                    item.count += 1;
                }
            })
        },
        delete_count(state,action){
            state.cart.forEach(item => {
                if(item.id == action.payload.id){
                    item.count -= 1;
                }
            })
        }
    }})

export const {delete_count,add_count,add_cart, delete_cart} = isCart.actions
export default isCart.reducer