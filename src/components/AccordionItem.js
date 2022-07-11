export const AccordionItem = (props) => {
    const getHour = () => {
        let d = new Date(props.data['time'])
        let hour = d.getHours()
        if(hour === 0)
            return "12 AM"
        else if(hour < 12)
            return hour+" AM"
        else if(hour === 12)
            return hour+" PM"
        else
            return (hour-12)+" PM"
    }
    const getUVPhrase = (index) => {
        if(index >= 7.5)
            return "Very High"
        else if(index >= 5.5)
            return "High"
        else if(index >= 2.5)
            return "Moderate"
        else
            return "Low"
    }
    const getTemperaturePhrase = (temperature) =>{
        if(temperature >= 56)
            return "Extraordinarily Dangerous Heat"
        else if(temperature >= 51)
            return "Extremely Dangerous Heat"
        else if(temperature >= 46)
            return "Very Dangerous Heat"
        else if(temperature >= 42)
            return "Dangerous Heat"
        else if(temperature >= 38)
            return "Quite Hot"
        else if(temperature >= 32)
            return "Hot"
        else if(temperature >= 27)
            return "Warm"
        else if(temperature >= 17)
            return "Pleasant"
        else if(temperature >= 11)
            return "Cool"
        else if(temperature >= 4)
            return "Chilly"
        else if(temperature >= -3)
            return "Cold"
        else if(temperature >= -12)
            return "Very Cold"
        else if(temperature >= -23)
            return "Quite Cold"
        else if(temperature >= -31)
            return "Bitterly Cold"
        else if(temperature >= -41)
            return "Dangerous Cold"
        else if(temperature >= -56)
            return "Very Dangerous Cold"
        else if(temperature >= -67)
            return "Extremely Dangerous Cold"
        else
            return "Extraordinarily Dangerous Cold"
    }
    let hour = getHour()
    return (
        <div className="accordion-item my-3">
            <h2 className="accordion-header" id={`flush-heading${props.index}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.index}`} aria-expanded="false" aria-controls={`flush-collapse${props.index}`}>
                <div className='button-child px-md-5'>
                    <p><strong>{hour}</strong></p>
                    <img src={props.data['condition']['icon']} alt="conditionIcon" />
                    <h1>{props.data['temp_c']}&#8451;</h1>
                </div>
                <div className='button-child px-2'>
                    <div>
                        <h5>RealFeel {props.data['feelslike_c']}&#8451;</h5>
                        <p>{getTemperaturePhrase(props.data['feelslike_c'])}</p>
                    </div>
                    <div>
                        <p className='prep'>{props.data['chance_of_rain']}%</p>
                    </div>
                </div>
            </button>
            </h2>
            <div id={`flush-collapse${props.index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${props.index}`}>
                <div className='accordion-body'>
                    <div className='accordion-body-head px-2'>
                        <p>{props.data['condition']['text']}</p>
                    </div>
                    <div className='accordion-body-head px-2'>
                        <p>RealFeel Shade {props.data['windchill_c']}&#8451;</p>
                        <p>{getTemperaturePhrase(props.data['windchill_c'])}</p>
                    </div>
                    <div className='accordion-body-child'>
                        <p>UV Index</p><h5>{props.data['uv']} {getUVPhrase(props.data['uv'])}</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Wind</p><h5>{props.data['wind_dir']} {props.data['wind_kph']} km/h</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Dew Point</p><h5>{props.data['dewpoint_c']}&#8451;</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Wind Gust</p><h5>{props.data['gust_kph']} km/h</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Cloud Cover</p><h5>{props.data['cloud']}%</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Humidity</p><h5>{props.data['humidity']}%</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Visibility</p><h5>{props.data['vis_km']} km</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Precipitation</p><h5>{props.data['precip_mm']} mm</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}