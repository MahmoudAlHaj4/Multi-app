import React from "react";
import { useEffect,useState } from "react";
import "./style.css"
import axios  from 'axios'

const Weather = ()=>{
    const [weatherdata,setweatherdata] = useState([])

    useEffect(()=>{
       const getData = async () => {
    try {
        const response = await axios.get("http://api.weatherapi.com/v1/forecast.json?key=ab7b00a280f448abba3205026242603&q=beirut&days=5");
        console.log(response)
        const { forecast } = response.data;
        const forecastData = forecast.forecastday.slice(0,3).map(day => ({
            date: day.date,
            maxTemperature: day.day.maxtemp_c,
            minTemperature: day.day.mintemp_c,
            avgWindSpeed: day.day.avgvis_km
        }));
        
        setweatherdata(forecastData)
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

        getData()
    },[])

    return (
        <div></div>
    )
}