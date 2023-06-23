import React from 'react'
import { WeatherGrid } from './components/WeatherGrid'
import { AddWeather } from './components/AddWeather'

export const WeatherApp = () => {
  

  return (
    <>
    <main className=''>
     <AddWeather/>
      <WeatherGrid/>
    </main>
    </>
  )
}
