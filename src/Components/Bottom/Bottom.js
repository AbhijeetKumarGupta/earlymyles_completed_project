import React,{Component} from 'react';
import Card from "../Card/card";
import {connect} from "react-redux";
import "./bottom.css";

class Bottom extends Component {
    render(){
    return (  
     <div className="cardDiv">
     {this.props.cardData.map((item)=> item.albumId==this.props.currentSelected && <Card data={item} key={item.id}/>)}
      </div> );
    }
}
 
const mapStateToProp = (state) => ({
    cardData: state.cardData,
    currentSelected :state.currentSelected,
});

export default connect(mapStateToProp,null)(Bottom);