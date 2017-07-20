import React, { Component } from 'react'
require("./Header.css");

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='wrapper'>
                    <img src='/images/logo.png'></img>
                </div>
            </div>
        )
    }
}
