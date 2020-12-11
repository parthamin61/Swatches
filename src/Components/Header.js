import React, { Component } from 'react';
import Bar from './../Images/header.png';
import Logo from './../Images/logo-symbol.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={Logo} alt="logopic" />
                <input type="text" placeholder="Search" />
            </div>
        );
    }
}
    
export default Header
