import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const xCoord = event.nativeEvent.offsetX;
    const yCoord = event.nativeEvent.offsetY;
    drawChromeBoiAtCoords(xCoord, yCoord);
  }

  handleKeyPress = (event) => {
    const key = event.nativeEvent.key;
    if(key === 'a')
    {
      resize('+');
    }
    else if(key === 's')
    {
      resize('-');
    }
    else {
      //do nothing
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPressCapture={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
