import React, { Component } from 'react';
import Forecast from './components/Forecast'
import ForecastForm from './components/ForecastForm'
import ForecastModel from './models/forecast'
import TenDay from './components/TenDay'
import VideoBackground from './components/VideoBackground'
import weatherMappings from './helpers/weatherMappings'

class App extends Component {
  constructor(props){
    super(props)
    this.weatherMappings = weatherMappings
    this.state = {
      forecast: {
        tenDay: []
      }
    }
  }
  componentDidMount(){
    this.fetchDefaultCity()
  }
  fetchDefaultCity(){
    let forecast = new ForecastModel("Washington", "DC")
    forecast.getForecast().then(function(res){
      this.setState({
        forecast: res
      })
    }.bind(this))
  }
  getForecast(location){
    // TODO: Handle Bad user input
    if(!location) console.log("Error Fetching Location");
    let forecast = new ForecastModel(location.city, location.state)
    forecast.getForecast().then(function(res){
      this.setState({
        forecast: res
      })
    }.bind(this))
  }
  render() {
    console.log(this.state.forecast);
    return (
      <div className="weather">
        <VideoBackground
          videoId={this.weatherMappings[this.state.forecast.icon]}/>
        <h1>Weathereact</h1>
        <ForecastForm
          getForecast={this.getForecast.bind(this)}/>
        <Forecast
          forecast={this.state.forecast}
          />
        <TenDay
          forecasts={this.state.forecast.tenDay}/>
      </div>
    );
  }
}

export default App;
