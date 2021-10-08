import React,{Component} from 'react';
import {connect} from "react-redux";
import {setCurrentSelected} from "../../Redux/Action/action";

class Dropdown extends Component {

    handleDropdown = (e) => {
    this.props.setSelected( e.target.value );
    console.log(e.target.value)
    };

   render(){
       console.log(this.props.listData.length);
    return ( 
    <div className="w-100">
    <select name="selectAlbum" id="selectAlbum" className="form-select form-select-sm mb-3" aria-label="select-album" placeholder="Select Album" onChange={this.handleDropdown}>
    {
    this.props.listData.map((item)=>
    (
    <option value={item.id} key={item.id}>
    {item.title}
    </option>))
    }
    </select>
    </div> );
    }
}
 
const mapStateToProp = (state) => ({
    listData: state.dropdownData,
});

const mapDispatchToProp = (dispatch) => ({
  setSelected: (payload) => dispatch(setCurrentSelected(payload)),
});


export default connect(mapStateToProp,mapDispatchToProp)(Dropdown);