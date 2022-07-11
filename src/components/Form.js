import { useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
export const Form = () => {
    let { cityName } = useParams()
    if(cityName === undefined)
        cityName = ""
    const [city, setCity] = useState(cityName)
    let navigate = useNavigate()
    const handleSubmit = (event) =>{
        event.preventDefault()
        navigate(`/${city}`, { replace: false })
        navigate(0)
    }
    return (
        <>
        <form onSubmit={handleSubmit} className='search-bar mt-3'>
            <input value={city} onChange={(event) => setCity(event.target.value)} type='text' placeholder='Enter Location...' className='form-control text-center' />
            <button className='btn btn-primary btn-lg' type='submit'>Search</button>
        </form>
        <Outlet/>
        </>
    )
}