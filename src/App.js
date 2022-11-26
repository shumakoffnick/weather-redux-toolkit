import { useState } from "react";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import {dataWeather} from './redux/weatherSlice'
function App() {
  const dispatch = useDispatch()
  const selector = useSelector((state)=> state.weather.data)
  const [location, setLocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=553c21ffbf7105398e50eb4f5d2f1667`
  
  const searchLocation = (event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then((res)=> {
        dispatch(dataWeather(res.data))
      })
      setLocation('')
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input type='text' value={location} onChange={event=> setLocation(event.target.value)} placeholder='Enter Location' onKeyPress={searchLocation}/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{selector.name}</p>
          </div>
          <div className="temp">
            {selector.main ? <h1>{selector.main.temp.toFixed()}</h1> : null}
          </div>
          <div className="description">
            {selector.weather ? <p>{selector.weather[0].main}</p> : null}
          </div>
        </div>

        {selector.name !== undefined && 
        <div className="bottom">
          <div className="feels">
            {selector.main ? <p className="bold">{selector.main.feels_like}</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {selector.main ? <p className="bold">{selector.main.humidity}</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {selector.wind ? <p className="bold">{selector.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      }

      </div>    
    </div>
  );
}

export default App;
