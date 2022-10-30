import { useEffect } from "react";
import { useState } from "react";

 const useLocation = () => {
 
  const [latLon, setlatLon] = useState();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  useEffect(() => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      setlatLon({ lat, lon });
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  
  
  return {useLocation,hour,minute,latLon}
}

export default useLocation