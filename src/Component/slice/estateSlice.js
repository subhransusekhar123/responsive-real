import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  estate_data : [
    {
      name:"",
      location:"hyderabad",
      price:2000,
      propertyType:"1bhk",
      date:"2022-11-06"
    },
    {
      name:"",
      location:"hyderabad",
      price:15000,
      propertyType:"3bhk",
      date:"2022-11-05"
    },
    {
      name:"",
      location:"bangalore",
      price:2200,
      propertyType:"1bhk",
      date:"2022-11-03"
    },
    {
      name:"",
      location:"hyderabad",
      price:2300,
      propertyType:"1bhk",
      date:"2022-11-5"
    },
    {
      name:"",
      location:"bangalore",
      price:2400,
      propertyType:"1bhk",
      date:"2022-11-01"
    },
    {
      name:"",
      location:"delhi",
      price:3000,
      propertyType:"2bhk",
      date:"2022-11-02"
    }

  ],
  filtered_data:[],
  liked_data:[]
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
    price_search: (state,action) => {
      let priceRange = action.payload.split("-")
      console.log(priceRange)
      function price(data){
        if(Number(data.price) > priceRange[0] && Number(data.price) < priceRange[1] ){
          return data;
        }
       
      };
      
      state.filtered_data = state.estate_data.filter(price);
      console.log(state.filtered_data);
    },
    sendToLikedData : (state,action) => {
      console.log(action.payload)
      state.liked_data.push(action.payload);
      console.log(state.liked_data);
    },
    propertyType_search:(state,action) => {
      function property(data){
        return data.propertyType === action.payload ;
      }
      state.filtered_data = state.estate_data.filter(property);
      console.log(state.filtered_data,action.payload);
    },
    date_search:(state,action) => {
      console.log(action.payload);
      function dateFilter(data){
        return data.date == action.payload
      }
      state.filtered_data = state.estate_data.filter(dateFilter)
      console.log(state.filtered_data);
    }
  },
})


export const { first_data, location_search,sendToLikedData,propertyType_search ,price_search,date_search } = estateSlice.actions;

export default estateSlice.reducer ; 