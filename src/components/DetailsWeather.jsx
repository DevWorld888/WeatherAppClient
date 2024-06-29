import { useSelector } from "react-redux"


const DetailsWeather = () => {
  const { dataWeather, dataTemp,wind } = useSelector(state => state.weather)
  if (!dataWeather || dataWeather.length === 0 || !dataTemp) {
    return <p>No weather data available.</p>;
  }
  return (
    <>
      <h3>{dataWeather[0].description}</h3>
      <img src={`http://openweathermap.org/img/wn/${dataWeather[0].icon}.png`} width={50} height={50}></img>
      <p>Humidity: {dataTemp.humidity}%</p>
      <p>Wind: {wind.speed} Km/h</p>
    </>
  )
}

export default DetailsWeather
