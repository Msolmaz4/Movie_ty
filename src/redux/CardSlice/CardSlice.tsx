import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: string;
  quanty: number;
  price: number;
  totalPrice: number;
  available:boolean;
}

interface CartState {
  cards: Card[];
  itemCount: number;
  total: number;
 
}

const initialState: CartState = {
  cards: [],
  itemCount: 0,
  total: 0,
 
};

const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Card>) => {
        const sonDurum = state.cards.find(item=>item.id === action.payload.id)
        if(!sonDurum ){
            state.cards.push({...action.payload,quanty:1 ,price:action.payload.price,available:action.payload.available})
        }

    },
    removeCard:(state,action: PayloadAction<Card>)=>{
        const temCrd= state.cards.filter(item=>item.id !== action.payload.id)
        state.cards = temCrd

    },
    clearCard :(state)=>{
        state.cards= []
    },
    getcartTotal :(state)=>{
        state.total = state.cards.reduce((cartTotal,cartItem)=>{
            return cartTotal +=Number(cartItem.price)
        },0)
      state.itemCount = state.cards.length
    }
  }
});

export const { addToCart ,removeCard,clearCard,getcartTotal} = cardSlice.actions;

export default cardSlice.reducer;