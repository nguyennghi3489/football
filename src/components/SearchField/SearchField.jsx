import React, { Component } from 'react'
require("./SearchField.css");

export default class SearchField extends Component {
    render() {
        return (
            <div className='input-wrapper'>
                <input type='text' onChange={ event => this.props.searchVideo(event.target.value) } placeholder='Search Videos Now' />
                {/*<ul>
                    <li>Hello World</li>
                    <li>Hello World</li>
                    <li>Hello World</li>
                </ul>*/}
            </div>
        )
    }
}
