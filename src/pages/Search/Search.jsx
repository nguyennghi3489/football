import React, { Component } from 'react'
import Helmet from 'react-helmet';
import SearchField from '../../components/SearchField/SearchField.jsx';
import ResultSection from '../../components/ResultSection/ResultSection.jsx';
import { connect } from 'react-redux'
import actions from '../../actions/index'

require("./Search.css");

export class SearchView extends Component {
    componentDidMount() {
        this.props.loadVideo();
    }

    render() {
        const {
            videos
        } = this.props;
        return (
            <div className='search-page'>
                <div className='wrapper'>
                    <Helmet title="Search" />
                    {/*<img src='/images/bro.png'/>*/}
                    <div className='filter'>
                        <ul>
                            <li>Newest</li>
                            <li>Must Watch</li>
                        </ul>
                    </div>
                    <div className='search-section'>
                        <SearchField searchVideo={this.props.searchVideo}></SearchField>
                        <h4>Newest Highlight</h4>
                        {videos&&<ResultSection videos={videos}></ResultSection>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    videos: state.video.videoList
})

const mapDispatchToProps = dispatch => ({
    loadVideo: () => dispatch(actions.loadVideo()),
    searchVideo: (input) => dispatch(actions.searchVideo(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)