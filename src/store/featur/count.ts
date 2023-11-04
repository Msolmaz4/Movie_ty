import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    selec :'string'
}

export const countSlice = createSlice({
name:'select',
initialState,
reducers:{
    change:(state,action: PayloadAction<string>)=>{
        console.log(action.payload)
    }
}
})

export const { change } = countSlice.actions

export default countSlice.reducer