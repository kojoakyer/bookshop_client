import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },

    reducers:{
        loginStart:(state:any)=>{
            state.isFetching = true
        },
        loginSuccess:(state:any,action:any)=>{
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFailure:(state:any)=>{
            state.isFetching=false
            state.error = true
        },
        logout:(state:any)=>{
            state.currentUser = null
        }
    }
})



export const { loginStart,loginFailure,loginSuccess,logout } = userSlice.actions;
export default userSlice.reducer;