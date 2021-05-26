// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
  constructor() {
    super()
    this.state = {
      hasBeenClicked: false
    }
  }
  handleClick = () => {
    this.setState(previousState => {
     return {
      toggled: !previousState.toggled
     }
    })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
      </div>
    )
  }

}