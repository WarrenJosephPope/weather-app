export const AccordionItem = (props) => {
    const getHour = () => {
        let d = new Date(props.data['DateTime'])
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
    const getIconSrc = () => {
        if(props.data['WeatherIcon']<10)
            return `https://developer.accuweather.com/sites/default/files/0${props.data['WeatherIcon']}-s.png`
        else
            return `https://developer.accuweather.com/sites/default/files/${props.data['WeatherIcon']}-s.png`
    }
    let hour = getHour()
    return (
        <div className="accordion-item my-3">
            <h2 className="accordion-header" id={`flush-heading${props.index}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.index}`} aria-expanded="false" aria-controls={`flush-collapse${props.index}`}>
                <div className='button-child px-md-5'>
                    <p><strong>{hour}</strong></p>
                    <img src={getIconSrc()} alt="conditionIcon" />
                    <h1>{props.data['Temperature']['Value']}&#8451;</h1>
                </div>
                <div className='button-child px-2'>
                    <div>
                        <h5>RealFeel {props.data['RealFeelTemperature']['Value']}&#8451;</h5>
                        <p>{props.data['RealFeelTemperature']['Phrase']}</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" version="1.1">
                            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="atoms/data/Precip-amount" transform="translate(0.000000, -2.000000)" fillRule="nonzero" stroke="#878787" strokeWidth="0.714285714">
                                    <g id="Precip" transform="translate(1.000000, 0.000000)">
                                        <path d="M4.53219662,2.89097652 C6.25507811,3.8432608 9.84707857,8.36833713 10.3066219,11.6474474 C10.334526,13.3652903 9.77304348,14.7484231 8.85708736,15.729016 C7.8883088,16.7661589 6.51875978,17.3571429 4.99950108,17.3571429 C3.54302065,17.3571429 2.22389043,16.8125986 1.26026731,15.9324543 C0.285019232,15.0416923 -0.326594844,13.8078923 -0.356227296,12.4421133 C0.146905237,8.40664363 3.65705731,3.95234886 4.53219662,2.89097652 Z M2.71705318,10.2216266 C2.70832712,10.2336185 2.70040679,10.247973 2.69230079,10.2635425 C2.36982822,10.883422 2.10246493,11.5185262 1.99660437,12.4714744 C2.00931504,12.8791813 2.13980542,13.2575713 2.35541205,13.5821866 C2.58928303,13.9343005 2.92266742,14.2233478 3.31554289,14.4205453 C3.35002424,14.4378747 3.38644165,14.4423605 3.4205325,14.4382468 C3.46012911,14.4334688 3.49746098,14.4180422 3.52545427,14.3944031 L3.53544081,14.388829 C3.51121535,14.357448 3.48486166,14.3241331 3.45697884,14.2888677 C3.12861588,13.873564 2.63620489,13.2223568 2.63620489,12.3427593 C2.63620489,11.5913334 2.71338832,10.7301246 2.71705318,10.2216266 Z" id="Shape"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p className='prep'>{props.data['PrecipitationProbability']}%</p>
                    </div>
                </div>
            </button>
            </h2>
            <div id={`flush-collapse${props.index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${props.index}`}>
                <div className='accordion-body'>
                    <div className='accordion-body-head px-2'>
                        <p>{props.data['IconPhrase']}</p>
                    </div>
                    <div className='accordion-body-head px-2'>
                        <p>RealFeel Shade {props.data['RealFeelTemperatureShade']['Value']}&#8451;</p>
                        <p>{props.data['RealFeelTemperatureShade']['Phrase']}</p>
                    </div>
                    <div className='accordion-body-child'>
                        <p>UV Index</p><h5>{props.data['UVIndex']} {props.data['UVIndexText']}</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Wind</p><h5>{props.data['Wind']['Direction']['English']} {props.data['Wind']['Speed']['Value']} km/h</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Dew Point</p><h5>{props.data['DewPoint']['Value']}&#8451;</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Wind Gust</p><h5>{props.data['WindGust']['Speed']['Value']} km/h</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Cloud Cover</p><h5>{props.data['CloudCover']}%</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Humidity</p><h5>{props.data['RelativeHumidity']}%</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Visibility</p><h5>{props.data['Visibility']['Value']} {props.data['Visibility']['Unit']}</h5>
                    </div>
                    <div className='accordion-body-child'>
                        <p>Indoor Humidity</p><h5>{props.data['IndoorRelativeHumidity']}%</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}