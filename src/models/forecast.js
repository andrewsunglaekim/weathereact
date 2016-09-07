import axios from "axios"

class Forecast {
  constructor(city, state){
    this.city = city
    this.state = state
  }
  getForecast(){
    let request = axios.get(`http://api.wunderground.com/api/f28a93cae85945b6/conditions/q/${this.state}/${this.city}.json`).then(function(res){
      this.tempF = res.data.current_observation.temp_f
      this.weather = res.data.current_observation.weather
      this.iconUrl = res.data.current_observation.icon_url
      this.icon = res.data.current_observation.icon
    }.bind(this))
    return request
  }
}

export default Forecast
