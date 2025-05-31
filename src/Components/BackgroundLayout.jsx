import { useEffect, useState, useContext } from 'react'
import { StateContext } from '../Context/index.jsx'
import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'

const BackgroundLayout = () => {
  const { weather } = useContext(StateContext)
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if (weather.conditions) {
      const imageString = weather.conditions.toLowerCase()
      if (imageString.includes('clear')) setImage(Clear)
      else if (imageString.includes('cloud')) setImage(Cloudy)
      else if (imageString.includes('rain') || imageString.includes('shower')) setImage(Rainy)
      else if (imageString.includes('snow')) setImage(Snow)
      else if (imageString.includes('fog')) setImage(Fog)
      else if (imageString.includes('thunder') || imageString.includes('storm')) setImage(Stormy)
    }
  }, [weather])

  return (
    <img
      src={image}
      alt="weather background"
      className='fixed top-0 left-0 w-full h-full object-cover -z-10'
    />
  )
}

export default BackgroundLayout
