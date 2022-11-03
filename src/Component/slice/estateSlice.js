import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  estate_data : [
    {
      name:"",
      location:"hyderabad",
      price:2000,
      propertyType:"1bhk"
    },
    {
      name:"",
      location:"hyderabad",
      price:15000,
      propertyType:"3bhk"
    },
    {
      name:"",
      location:"bangalore",
      price:2200,
      propertyType:"1bhk"
    },
    {
      name:"",
      location:"hyderabad",
      price:2300,
      propertyType:"1bhk"
    },
    {
      name:"",
      location:"bangalore",
      price:2400,
      propertyType:"1bhk"
    },
    {
      name:"",
      location:"delhi",
      price:3000,
      propertyType:"2bhk"
    }

  ],
  filtered_data:[]
}

export const estateSlice = createSlice({
  name: 'estate',
  initialState,
  reducers: {
    location_search: (state,action) => {
      function location(data){
        return data.location === action.payload ;
      }
      state.filtered_data = state.estate_data.filter(location);
      console.log(state.filtered_data);
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { first_data, location_search, decrement, incrementByAmount } = estateSlice.actions;

export default estateSlice.reducer ; 