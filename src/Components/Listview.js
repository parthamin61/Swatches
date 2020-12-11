import React, { Component } from 'react';
import {connect} from 'react-redux';
import {colorActions} from './../redux/actions';
import {Redirect} from 'react-router-dom';

function ColorGrid(props) {
    return (
        <>
            <div className="d-flex">
                {props.createColorGrid(props.pageNumber, 1)}
            </div>
            <div className="d-flex">
                {props.createColorGrid(props.pageNumber, 2)}
            </div>
            <div className="d-flex">
                {props.createColorGrid(props.pageNumber, 3)}
            </div>
        </>
    )
}

class Listview extends Component {
    constructor () {
        super();
        this.state = {
            pageNumber: 1,
            perPage: 12,
            perRow: 4,
            pageNumbers: [1,2,3,4,5,6,7,8,9],
            redirect: false
        }
    }
    
    componentDidMount() {
        console.log('this.props.colors ', this.props.colors);
    }

    updateSelectedColor = (color) => {
        this.props.updateSelectedColor(color);
        //redirect to color details page
        this.setState({
            redirect: '/color-details'
        });
    }

    createColorGrid = (pageNumber, row) => {
        const colorGridMarkup = this.props.colors.map((color, index) => {
            const targetIndex = (((pageNumber - 1) * this.state.perPage) + ((row - 1)* this.state.perRow));
            if (index < targetIndex || index >= (targetIndex + this.state.perRow)) {
                return;
            }
            return (
                <div key={index}>
                    <div onClick={(e) => this.updateSelectedColor(color)}>
                        <div className="color-container" style={{backgroundColor: color}}></div>
                        <div>{color}</div>
                    </div>
                </div>
            )
        });

        return colorGridMarkup;
    }

    changePageNumber = (pageNumber) => {
        console.log(pageNumber);
        this.setState({
            pageNumber: pageNumber
        });
    }

    createPageNumber = () => {
        const pageNumberMarkup = this.state.pageNumbers.map((pageNumber, index) => {
            return (
                <div className="page-number" key={index} onClick={(e) => this.changePageNumber(pageNumber)}>{pageNumber}</div>
            )
        });
        return pageNumberMarkup;
    }
   
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <ColorGrid 
                    pageNumber={this.state.pageNumber} 
                    createColorGrid={(pageNumber, row) => this.createColorGrid(pageNumber, row)}
                />

                <div className="d-flex mt-3 page-number-container">
                    {this.createPageNumber()}
                </div>
            </div>

           
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

export default connect(mapState, actionCreators)(Listview);