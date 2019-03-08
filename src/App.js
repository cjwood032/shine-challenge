import React, { Component } from 'react';   
import './App.css';
import imageData from './data.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: []
    }
    this.renderImage=this.renderImage.bind(this)
  
  };
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  renderImage(img) {
    return(
      <div id={img.id} onClick={(e) => this.clickCount(e, img)}>
        <img src={img.src} key={img.id} />
      </div>
    )
  }
  clickCount= (e, img)=> {
    e.preventDefault()
    console.log(img.id +" clicked")
    //debugger
    if(!this.state.imageList.includes(img.id)){this.state.imageList.push(img)}
    console.log(this.state.imageList)
  }
  clearList = (e) => {
    e.preventDefault()
    this.state.imageList=[]
    console.log(this.state.imageList)
  }
  render() {
    return (
      <div className="App">
      <button onClick= {(e) =>this.clearList(e)}>Clear the Order</button>
        <div className="grid-container" cols="2">
          {imageData.map(this.renderImage)}
        </div>
      </div>
    );
  }
}

export default App;
