import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useLocation from "./useLocation";


const useWeather = () => {
    const  {latLon} = useLocation();
    const [weather, setweather] = useState();
    useEffect(() => {
        if (latLon !== undefined) {
          const API_KEY = "106a180370fdfa3ffd1cd7eda89f1d08";
          const URL = `//api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`;
          axios
            .get(URL)
            .then((res) => setweather(res.data))
            .catch((err) => console.log(err));
        }
      }, [latLon]);


   return { useWeather,weather,setweather}


}
export default useWeather