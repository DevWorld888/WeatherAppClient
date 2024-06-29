import { setWeatherData, startloading } from "./weatherSlice"

export const getWeatheryCity = (city) =>{
    return async (dispatch)=>{
        dispatch(startloading())
        try {
            const response = await fetch(`http://localhost:3000/api/weather/${city}`)
            const {main,weather,name,wind} = await response.json();
            console.log('response', main);
            dispatch(setWeatherData({main,weather,name,wind}))
          } catch (error) {
            console.log('error',error);
        }
    }
}