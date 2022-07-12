import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import data from './response.json'
import { Accordion } from './Accordion'

export const Details = () => {
    const [load, setLoad] = useState(false)
    const [forecast, setForecast] = useState([])
    let { cityName } = useParams()

    useEffect(() => {
        const getCity = () => {
            setLoad(true)
            let params = {
                "apikey": process.env.REACT_APP_API_KEY,
                "q": cityName
            }
            fetch("https://dataservice.accuweather.com/locations/v1/cities/search?"+(new URLSearchParams(params)).toString())
                .then(response => response.json())
                .then(data => {
                    let cityId = data[0]['Key']
                    params = {
                        "apikey": process.env.REACT_APP_API_KEY,
                        "language": "en-us",
                        "details": true,
                        "metric": true
                    }
                    fetch("https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/"+cityId+"?"+(new URLSearchParams(params)).toString())
                        .then(response => response.json())
                        .then(data => {
                            setForecast(currentData => currentData.concat(data))
                            setLoad(false)
                        })
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        getCity()
    }, [])
    return (
        <>
            {load &&
                <div className='spinner-holder'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {forecast.length > 0 &&
                <Accordion forecast={forecast} />
            }
        </>
    )
}