import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    selec: 'string',
    seat: 'string',
    toplam: [],
    hesap:[]
}

export const countSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        change: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            
        },
        seatF: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.toplam.push(action.payload)
        }
    }
})

export const { change, seatF } = countSlice.actions

export default countSlice.reducer
