import React, { Component } from 'react';

class Forecast extends Component {
  render(){
    return(
      <div className="forecast">
        <h2>{this.props.forecast.city}, {this.props.forecast.state}</h2>
        <img alt={this.props.forecast.icon} src={this.props.forecast.iconUrl}/>
        <p>{this.props.forecast.weather}</p>
        <p>{this.props.forecast.tempF}</p>
      </div>
    )
  }
}

export default Forecast
