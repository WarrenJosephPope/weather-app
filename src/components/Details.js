import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import data from './response.json'
import { Accordion } from './Accordion'
import { BackgroundText } from './BackgroundText'

export const Details = () => {
    const [load, setLoad] = useState(false)
    const [found, setFound] = useState(true)
    const [forecast, setForecast] = useState([])
    let { cityName } = useParams()

    useEffect(() => {
        console.log("Rendered")
        const getCity = () => {
            setLoad(true)
            let params = {
                "apikey": process.env.REACT_APP_API_KEY,
                "q": cityName
            }
            fetch("https://dataservice.accuweather.com/locations/v1/cities/search?"+(new URLSearchParams(params)).toString())
                .then(response => response.json())
                .then(data => {
                    if(data.length === 0){
                        setLoad(false)
                        setFound(false)
                        return
                    }
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
    }, [cityName])
    return (
        <>
            {load &&
                <div className='spinner-holder'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {!found &&
                <BackgroundText text="Location not found..." />
            }
            {forecast.length > 0 &&
                <Accordion forecast={forecast} />
            }
        </>
    )
}