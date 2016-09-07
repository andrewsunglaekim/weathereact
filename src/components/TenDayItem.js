import React, {Component} from 'react'

class TenDayItem extends Component {
  render(){
    let {day, high, low, condition} = this.props.forecast
    return(
      <div className="tenDayItem">
        <h3>{day}</h3>
        <p>Condition: {condition}</p>
        <p>High: {high}</p>
        <p>Low: {low}</p>
      </div>
    )
  }
}

export default TenDayItem
