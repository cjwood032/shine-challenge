import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="grid-container" cols="2">
          <img src="https://via.placeholder.com/100?text=image0" className="images" />
          <img src="https://via.placeholder.com/100?text=image1" className="images" />
          <img src="https://via.placeholder.com/100?text=image2" className="images" />
          <img src="https://via.placeholder.com/100?text=image3" className="images" />
          <img src="https://via.placeholder.com/100?text=image4" className="images" />
          <img src="https://via.placeholder.com/100?text=image5" className="images" />
          <img src="https://via.placeholder.com/100?text=image6" className="images" />
          <img src="https://via.placeholder.com/100?text=image7" className="images" />
        </div>
      </div>
    );
  }
}

export default App;
