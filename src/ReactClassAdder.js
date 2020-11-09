import React, { Component } from "react";
import './App.css';
//add a class with react
//https://www.andreasreiterer.at/dynamically-add-classes/

class ReactClassAdder extends Component {
  state = {
    isBoxWhite: false
  };
  toggleBox = () => {
    this.setState(prevState => ({ isBoxWhite: !prevState.isBoxWhite }));
  };
  render() {
    const { isBoxWhite } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleBox}>ReactClassAdder</button>
        <div className={`box ${isBoxWhite ? "" : "hidden"}`}>
{/* $ nothing to do with Jquery */}

          <p>I'm the box</p>
        </div>
      </div>
    );
  }
}
export default ReactClassAdder;

//change a class with reactjquery
//https://codesandbox.io/s/p3wjjxp7zx?from-embed=&file=/src/index.js:242-245