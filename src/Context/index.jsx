
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios';


export const StateContext = createContext();

export default function StateContextProvider ({ children }) {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Cairo');
    const [thisLocation, setLocation] = useState('');

   
    const fetchWeather = async () => {
    const options = {
      method: 'GET',
      url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
      params: {
        contentType: 'json',
        unitGroup: 'metric',
        aggregateHours: '24',
        location: place,
        shortColumnNames: '0'
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
      const thisDate = Object.values(response.data.locations)[0]
      setLocation(thisDate.address)
      setValues(thisDate.values)
      setWeather(thisDate.values[0])
    } catch (error) {
        console.error(error);
        toast.error('City not found please try again with another city') ;
    }
        
}

useEffect(() => {
    fetchWeather();
}, [place]);


return (
    <StateContext.Provider value={{
        weather,
                setPlace,
                values,
                thisLocation,
                place}}>
        {children}
        </StateContext.Provider>
)
}

