import { useState } from "react"
import axios from "axios";

function Weather() {

    const [city,setcity]=useState("")

    const [weather,setweather]=useState("")
    const [temp,settemp]=useState("")
    const [desc,setdesc]=useState("")

    function handleCity(evt)
    {
        setcity(evt.target.value)
    }
    function getWeather(){
        var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73237697b968d540484db30e8a90f54e`)

        weatherData.then(function(success){
            console.log(success)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)

        })

    }
    return (
        <div className="bg-blue-500 p-20">
            <div className="bg-white p-10 rounded-md">
                <h1 className="text-2xl animate-bounce font-medium">WEATHER REPORT</h1>
                <p>I Can give you a weather report about your city^</p>
                <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md p-2" placeholder="Enter your city name"></input><br></br>
                <button onClick={getWeather} className="bg-black text-white pl-5 pr-5 pt-3 pb-3 rounded-md m-2">Check</button>

                <div className="mt-2">
                    <h1><b>Weather:</b>{weather}</h1>
                    <p><b>Temparature:</b>{temp}</p>
                    <p><b>Description:</b>{desc}</p>


                </div>
            </div>
        </div>
    )
}
export default Weather