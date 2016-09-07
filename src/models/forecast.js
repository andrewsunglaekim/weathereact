import axios from "axios"
import titlize from '../helpers/titlize'

class Forecast {
  constructor(city, state){
    this.city = titlize(city)
    this.state = titlize(state)
  }
  getCurrent(){
    return axios.get(`http://api.wunderground.com/api/f28a93cae85945b6/conditions/q/${this.state}/${this.city}.json`)

  }
  getTenDay(){
    return axios.get(`http://api.wunderground.com/api/f28a93cae85945b6/forecast10day/q/${this.state}/${this.city}.json`)
  }
  getForecast(){
    return axios.all([this.getCurrent(), this.getTenDay()])
      .then(axios.spread(function(reg, tenDay){
        var forecast = {
          city: this.city,
          state: this.state,
          tempF: reg.data.current_observation.temp_f,
          weather: reg.data.current_observation.weather,
          iconUrl: reg.data.current_observation.icon_url,
          icon: reg.data.current_observation.icon,
          tenDay: this.parseTenDay(tenDay.data.forecast.simpleforecast.forecastday)
        }
        console.log(tenDay);
        return forecast
      }.bind(this)))
  }
  parseTenDay(apiForecasts){
    let parsedForecasts = apiForecasts.map(forecast => {
      let newForecast = {}
      newForecast.day = forecast.date.weekday
      newForecast.high = forecast.high.fahrenheit
      newForecast.low = forecast.low.fahrenheit
      newForecast.condition = forecast.conditions
      return newForecast
    })
    return parsedForecasts
  }

}


export default Forecast
