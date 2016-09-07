import React, {Component} from 'react'
import TenDayItem from './TenDayItem'

class TenDay extends Component {
  render(){
    console.log(this.props.forecasts);
    var forecastEls = this.props.forecasts.map((forecast, index)=> {
      return (
        <TenDayItem
          key={index}
          forecast={forecast} />
      )
    })
    return(
      <div className="tenDayContainer">
        {forecastEls}
      </div>
    )
  }
}

export default TenDay
