import { useState, useContext } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { StateContext } from './Context/index.jsx'
import { Toaster } from 'react-hot-toast'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'

function App() {
  const [input, setInput] = useState('')
  const { weather, thisLocation, values, setPlace } = useContext(StateContext)

  const submitCity = () => {
    setPlace(input)
    setInput('')
  }

  return (
    <>
      {/* خلفية التطبيق */}
      <BackgroundLayout />

      {/* المحتوى الرئيسي */}
      <div className='relative z-10 text-white min-h-screen px-4 md:px-12 py-6 bg-black/40 ' >
        <Toaster />

        {/* شريط البحث */}
        <nav className='w-full mb-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
          <h1 className='font-bold font tracking-wide text-3xl sm:text-4xl'>SkyCast</h1>
          <div className='bg-white shadow-2xl rounded flex items-center px-4 py-2 gap-2 w-full sm:w-[300px]'>
            <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
            <input
              onKeyUp={(e) => e.key === 'Enter' && submitCity()}
              type='text'
              placeholder='Search city'
              className='focus:outline-none w-full text-[#212121] text-lg'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </nav>

        {/* المحتوى */}
        <main className='grid grid-cols-1 md:grid-cols-2 gap-6 py-6 sm:py-12 '>
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
            {values?.slice(1, 7).map((curr) => (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
