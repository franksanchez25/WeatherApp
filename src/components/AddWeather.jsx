import React from 'react'

export const AddWeather = () => {
  return (
    <div className='flex justify-center py-10'>
        <form name='weatherSearch'>
            <input type="text" name="searchWeather" placeholder='City, country...' id="weatherField"  className=' border border-slate-200 placeholder-slate-400 h-10 w-40'/>
            <button className=' ml-6 bg-blue-400 h-10 w-40 rounded-md text-slate-100'>Search</button>
        </form>
    </div>
  )
}
