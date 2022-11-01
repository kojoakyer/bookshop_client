
import axios from 'axios'
import { publicRequest, userRequest } from '../requestMethod'
// import { publicRequest } from "../requestMethods"
import { loginFailure, loginStart, loginSuccess } from "./userSlice"


export const login = async (dispatch:any, user:any) => {
    dispatch(loginStart())
    try{

        const res  = await publicRequest.post('/user/signin', user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }

}