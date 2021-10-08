import React,{Component} from 'react';
import {connect} from "react-redux";
import {setDropdownDataToStore,setCardDataToStore} from "./Redux/Action/action";

import TopDiv from "./Components/Top/Top"
import BottomDiv from "./Components/Bottom/Bottom"

class App extends Component{

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>res.json())
    .then((result)=>this.props.setDropdownData(result));

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>res.json())
    .then((result)=>this.props.setCardData(result));
  }

  render(){
    return(
      <div id="main">
        <TopDiv/>
        <BottomDiv/>
      </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => ({
  setDropdownData: (payload) => dispatch(setDropdownDataToStore(payload)),
  setCardData: (payload) => dispatch(setCardDataToStore(payload)),
});

export default connect(null,mapDispatchToProp)(App);