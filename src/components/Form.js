import { useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import locationIcon from './location.png'

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
        <nav className="navbar navbar-dark bg-dark w-100 px-lg-5 px-sm-2">
            <div className="container-fluid">
                <a className="navbar-brand"><img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' width='40px' alt='Icon' />Weather App</a>
                <form onSubmit={handleSubmit} className="d-flex px-2" role="search">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><img width='15px' src={locationIcon} alt="Location icon" /></span>
                        <input value={city} onChange={(event) => setCity(event.target.value)} className="form-control me-2" type="search" placeholder="Location" aria-label="Search" aria-describedby="basic-addon1" />
                    </div>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}