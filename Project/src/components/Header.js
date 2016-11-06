import React, { Component } from 'react';
import './../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header-Container container">
                <div>
                    <span>Love Live! Sunshine!!</span>
                    <br />
                    <span>Seiyuu Birthdays</span>
                </div>
            </div>
        );
    }
}

export default Header;