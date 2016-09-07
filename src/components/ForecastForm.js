import React, {Component} from 'react'

class ForecastForm extends Component {
  constructor(){
    super()
    this.state = {
      city: "",
      state: ""
    }
  }
  onCityChange(event){
    this.setState({
      city: event.target.value
    })
  }
  onStateChange(event){
    this.setState({
      state: event.target.value
    })
  }
  submitForm(event){
    event.preventDefault()
    this.props.getForecast(this.state)
    this.setState({
      city: '',
      state: ''
    })
  }
  render(){
    return(
      <form onSubmit={e => this.submitForm(e)}>
        <label>City:</label>
        <input
          type="text"
          onChange={e => this.onCityChange(e)}
          placeholder="City"
          value={this.state.city || ''}/>
        <label>State:</label>
        <input
          type="text"
          onChange={e => this.onStateChange(e)}
          placeholder="State"
          value={this.state.state || ''}/>
        <button type='submit'>Get Forecast</button>
      </form>
    )
  }
}

export default ForecastForm
