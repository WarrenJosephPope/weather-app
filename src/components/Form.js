import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
export const Form = () => {
    let { cityName } = useParams()
    if(cityName === undefined)
        cityName = ""
    const [city, setCity] = useState(cityName)
    return (
        <>
        <form onSubmit={(event) =>{ event.preventDefault(); window.location.href=`/${city}`;}} className='search-bar mt-3'>
            <input value={city} onChange={(event) => setCity(event.target.value)} type='text' placeholder='Enter Location...' className='form-control text-center' />
            <button className='btn btn-primary btn-lg' type='submit'>Search</button>
        </form>
        <Outlet/>
        </>
    )
}