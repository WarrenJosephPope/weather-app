import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import data from './response.json'
import { Accordion } from './Accordion'

export const Details = () => {
    const [load, setLoad] = useState(false)
    const [forecast, setForecast] = useState([])
    let { cityName } = useParams()

    useEffect(() => {
        async function getCity(){
            setLoad(true)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=2`, options)
            const data = await response.json()
            setForecast((currentForecast) => {
                let list = data['forecast']['forecastday']
                let finalList = []
                for(let day in list){
                    let hours = list[day]['hour']
                    for(let item in hours)
                        finalList.push(hours[item])
                }
                let hour = (new Date()).getHours()
                list = finalList
                finalList = []
                let start = false
                for(let item in list){
                    if((new Date(list[item]['time'])).getHours() === hour)
                        start = true
                    if(start)
                        finalList.push(list[item])
                    if(finalList.length === 24)
                        break
                }
                return finalList
            })
            setLoad(false)
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