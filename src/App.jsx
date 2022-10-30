
import './App.css'
import Card from './components/Card'
import Loader from './components/Loader';
import useWeather from './hooks/useWeather';


function App() {
  
  const {weather} = useWeather();
  console.log(weather);

  return (
    <div className={weather?.weather[0].main} >
      {
        weather ? <Card/> : <Loader/>
      }
    
    </div>
  )
}

export default App
