import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { useDispatch } from 'react-redux';
import { getWeatheryCity } from '../store/slices/weather';
const CityList = () => {
  const dispatch = useDispatch()
  const handleFetchCity = async(city) =>{
    console.log('city',city);
    dispatch(getWeatheryCity(city))
  }
  return (
    <List>
      {['New York','Sydney','Paris','Bogota'].map((city, index) => (
        <ListItem  key={index} onClick={()=>handleFetchCity(city)}>
            <ListItemButton >
                <ListItemText primary={city} />
            </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default CityList
