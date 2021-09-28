import { createSlice } from "@reduxjs/toolkit";


const isAuth = createSlice({
    name:'isAuth',
    initialState:{
        isAuth:false
    },
    reducers:{
        set_auth(state,action){
            state.isAuth = action.payload
        }
    }
})

export const {set_auth} = isAuth.actions

export default isAuth.reducer