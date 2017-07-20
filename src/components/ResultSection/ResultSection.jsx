import React, { Component } from 'react'
import VideoItem from '../VideoItem/VideoItem.jsx'
require("./ResultSection.css");

export default class ResultSection extends Component {
    render() {
        const {
            videos
        } = this.props;

        return (
            <div className='video-list'>
                <ul>
                    { videos.map(item => (
                        <li key={item.id}><VideoItem video={item}/></li>
                    ))}
                </ul>  
            </div>
        )
    }
}
