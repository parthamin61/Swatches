import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Detailtview extends Component {
   
    render() {
        return (
            <div className="color-details-container">
                <div className="color-details" style={{backgroundColor: this.props.selectedColor}}>

                </div>
                <div>
                    {this.props.selectedColor}
                </div>
                <Link to="/">
                    <button type="button">Clear</button>
                </Link>
            </div>
        )
    }
}
    
function mapState(state) {
    const {selectedColor} = state.color;
    return {selectedColor};
}

const actionCreators = {
}

export default connect(mapState, actionCreators)(Detailtview);