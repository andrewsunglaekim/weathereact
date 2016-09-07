import React, { Component } from 'react';
import Forecast from './components/Forecast'
import ForecastForm from './components/ForecastForm'
import ForecastModel from './models/forecast'

class App extends Component {
  constructor(){
    super()
    this.state = {
      forecast: {}
    }
  }
  componentDidMount(){
    this.fetchDefaultCity()
  }
  fetchDefaultCity(){
    let forecast = new ForecastModel("Washington", "DC")
    forecast.getForecast().then(function(res){
      this.setState({
        forecast: forecast
      })
    }.bind(this))
    console.log("bob");
  }
  getForecast(location){
    let forecast = new ForecastModel(location.city, location.state)
    forecast.getForecast().then(function(res){
      this.setState({
        forecast: forecast
      })
    }.bind(this))
  }
  render() {
    return (
      <div className="App">
        <h1>Weathereact</h1>
        <ForecastForm
          getForecast={this.getForecast.bind(this)}/>
        <Forecast
          forecast={this.state.forecast}
          />
      </div>
    );
  }
}

export default App;
