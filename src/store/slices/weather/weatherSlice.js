import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        dataTemp:[],
        dataWeather:[],
        wind:[],
        name:'Sydney',
        isLoading:false
    },
    reducers: {
        startloading: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setWeatherData:(state,action)=>{
            console.log('actionsetWeatherData',action);
            state.isLoading = false;
            state.dataTemp = action.payload.main
            state.dataWeather = action.payload.weather
            state.wind = action.payload.wind
            state.name = action.payload.name
        }
    }
});


// Action creators are generated for each case reducer function
export const { startloading,setWeatherData } = weatherSlice.actions;