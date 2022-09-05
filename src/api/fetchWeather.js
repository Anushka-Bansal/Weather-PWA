import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '28c34e878387b01bb53a66f47bd6c860'

export const fetchWeather = async(query)=>{
    const {data} = await axios.get(URL,{
        params : {
            q:query,
            units:'metric',
            APPID : API_KEY,
        }
    });

    return data;
}