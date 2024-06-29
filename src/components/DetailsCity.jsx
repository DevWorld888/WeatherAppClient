import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getWeatheryCity } from "../store/slices/weather";


const DetailsCity = () => {
  const {dataTemp,dataWeather,isLoading,name} = useSelector(state => state.weather)
  console.log('dta from details',dataTemp,dataWeather,isLoading);
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getWeatheryCity(name))
  }, [dispatch,name])
  
  return (
    <div className="detailsCity">
      <div>
        <h3>Weather</h3>
        <span>now</span>
        <h1>{Math.round(dataTemp.temp)}<span>&deg;C</span></h1>
        <span>Feels like {Math.round(dataTemp.feels_like)}<span>&deg;C</span></span>
      </div>
      
    </div>
  )
}

export default DetailsCity
