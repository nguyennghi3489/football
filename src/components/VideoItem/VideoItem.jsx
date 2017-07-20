import React, { Component } from 'react'
import moment from 'moment';
require("./VideoItem.css");

export default class VideoItem extends Component {
    render() {
        console.log(this.props)
        const {
            id,
            title,
            img,
            owner,
            updated_date
        } = this.props.video;
        const format_date = data => moment().add(updated_date, 'days').format('DD MMMM YYYY')

        return (
            <div className='video-item'>
                <img src={img} />
                <h3>{title}</h3>
                <div className='misc'>
                    <div className='basic'>
                        <span className='owner'>{owner}</span>
                        <span className='updated_date'>{format_date(updated_date)}</span>
                    </div>
                </div>
            </div>
        )
    }
}
