import React, { Component } from 'react';
import Forecast from './components/Forecast'
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
  render() {
    return (
      <div className="App">
        <h1>Weathereact</h1>
        <Forecast
          forecast={this.state.forecast}
          />
      </div>
    );
  }
}

export default App;
