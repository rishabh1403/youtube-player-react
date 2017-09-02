import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './style.css';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDf86SrLkWSvkdqY5FY4splzRO8C5hSmtw';



class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            videos : [],
            selected : null
        };
        this.searchVideos("jain");
    }
    searchVideos(term){
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({ 
                videos:videos,
                selected:videos[0]
             });
        });
    }
    handleVideoSelect(selected){
        this.setState({selected});
    }
    render() {
        const vidSearch = _.debounce(term => {this.searchVideos(term)} , 1000);
        return (
            <div>
                <SearchBar onInputChange={vidSearch.bind(this)} />
                {this.state.selected && <VideoDetail video={this.state.selected}/>}
                <VideoList onVideoSelect={this.handleVideoSelect.bind(this)} videos={this.state.videos}/>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
