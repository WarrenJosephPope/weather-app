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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" version="1.1">
                            <title>Shape</title>
                            <desc>Created with Sketch.</desc>
                            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="atoms/data/Precip-amount" transform="translate(0.000000, -2.000000)" fillRule="nonzero" stroke="#878787" strokeWidth="0.714285714">
                                    <g id="Precip" transform="translate(1.000000, 0.000000)">
                                        <path d="M4.53219662,2.89097652 C6.25507811,3.8432608 9.84707857,8.36833713 10.3066219,11.6474474 C10.334526,13.3652903 9.77304348,14.7484231 8.85708736,15.729016 C7.8883088,16.7661589 6.51875978,17.3571429 4.99950108,17.3571429 C3.54302065,17.3571429 2.22389043,16.8125986 1.26026731,15.9324543 C0.285019232,15.0416923 -0.326594844,13.8078923 -0.356227296,12.4421133 C0.146905237,8.40664363 3.65705731,3.95234886 4.53219662,2.89097652 Z M2.71705318,10.2216266 C2.70832712,10.2336185 2.70040679,10.247973 2.69230079,10.2635425 C2.36982822,10.883422 2.10246493,11.5185262 1.99660437,12.4714744 C2.00931504,12.8791813 2.13980542,13.2575713 2.35541205,13.5821866 C2.58928303,13.9343005 2.92266742,14.2233478 3.31554289,14.4205453 C3.35002424,14.4378747 3.38644165,14.4423605 3.4205325,14.4382468 C3.46012911,14.4334688 3.49746098,14.4180422 3.52545427,14.3944031 L3.53544081,14.388829 C3.51121535,14.357448 3.48486166,14.3241331 3.45697884,14.2888677 C3.12861588,13.873564 2.63620489,13.2223568 2.63620489,12.3427593 C2.63620489,11.5913334 2.71338832,10.7301246 2.71705318,10.2216266 Z" id="Shape"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
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