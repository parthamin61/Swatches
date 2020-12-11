import React, { Component } from 'react';
import {connect} from 'react-redux';
import {colorActions} from './../redux/actions';
import {withRouter} from 'react-router-dom';

class Sidebar extends Component {
    array_rand = (array, num) => {
        const keys = Object.keys(array)
        if (typeof num === 'undefined' || num === null) {
          num = 1
        } else {
          num = +num
        }
        if (isNaN(num) || num < 1 || num > keys.length) {
          return null
        }
        // shuffle the array of keys
        for (let i = keys.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)) // 0 ≤ j ≤ i
          const tmp = keys[j]
          keys[j] = keys[i]
          keys[i] = tmp
        }
        return num === 1 ? keys[0] : keys.slice(0, num)
    }

    updateSelectedColor = (color) => {
        const randomIndex = this.array_rand(this.props.colors, 1);
        const randomSelectedColor = this.props.colors[randomIndex];
        this.props.updateSelectedColor(randomSelectedColor);
        //redirect to color details page
        console.log(this.props);
        this.props.history.push('/color-details');
    }
   
    render() {
        return (
            <nav>
                <div className="button" onClick={this.updateSelectedColor}>
                    <h1>
                        Random Color
                    </h1>
                </div>
            <ul>
                <li>Red</li>
                <li>Orange</li>
                <li>Yellow</li>
                <li>Green</li>
                <li>Blue</li>
                <li>Purple</li>
                <li>Brown</li>
                <li>Gray</li>
                
            </ul>
            </nav>
        )
    }
}
function mapState(state) {
    const {colors} = state.color;
    return {colors};
}

const actionCreators = {
    updateSelectedColor: colorActions.updateSelectedColor
}    

export default connect(mapState, actionCreators)(withRouter(Sidebar));