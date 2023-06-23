import React from 'react'
import { WeatherCard } from './WeatherCard'

export const WeatherGrid = () => {
  return (
    <div>
        <div className='flex justify-start ml-5 flex-wrap gap-3'>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
            <WeatherCard/>
        </div>
    </div>
  )
}
