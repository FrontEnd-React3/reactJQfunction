import React, { useState} from "react";
import $ from "jquery";

function Jqexcercise (props) {
//   constructor(props) {
//     super(props);
//     this.state = { store : ""}
//   }
const [state,setState] = useState(0);
// componentDidMount = () => {
//   let _this = this;

//   $('button').on('click', function(){_this.setState({ store : Math.random()})})
// }

function onClickHandler () {  $('button').on('click', function(){setState({ store : Math.random()})})
}

    return (
      <div>
        <h6>JQUERY REACT fctn, random number</h6>
        <h6>{state.store}</h6>
        <button onClick={onClickHandler}>test button</button>
      </div>
    );
  }


export default Jqexcercise;
