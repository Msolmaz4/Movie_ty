import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    selec :'string'
}

export const countSlice = createSlice({
name:'select',
initialState,
reducers:{
    change:(state,action: PayloadAction<number>)=>{
        console.log(action.payload)
    }
}
})

export const { change } = countSlice.actions

export default countSlice.reducer