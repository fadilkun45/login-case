import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
    method: 'post',
    headers: { 
      'Content-Type': 'application/json'
    },
}

const BaseUrl = 'http://localhost:4000/login'

export const LoginUser = createAsyncThunk('/login', async (body) => {
    const res = await axios.post(BaseUrl,body,config)
    console.log(res)
    return res.data
})