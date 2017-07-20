import React, { Component } from 'react'
import Helmet from 'react-helmet';

export default class New extends Component {
    render() {
        return (
            <div>
                <h1>This is the second page.</h1>
                <Helmet title="New Page" />
                {/*<img src='/images/bro.png'/>*/}
            </div>
        )
    }
}
