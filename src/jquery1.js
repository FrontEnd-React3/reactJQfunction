import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery";

class JQ1 extends Component {
  componentDidMount() {
    const h2 = $("h1");
    console.log(h2);
  }
  render() {
    return <h1>Hello React with JQuery</h1>;
  }
}

render(<JQ1 />, document.getElementById("root"));

export default JQ1;

//change a class with reactjquery
//https://codesandbox.io/s/p3wjjxp7zx?from-embed=&file=/src/index.js:242-245
