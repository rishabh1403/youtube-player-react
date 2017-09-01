import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDf86SrLkWSvkdqY5FY4splzRO8C5hSmtw';



class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            videos : []
        };
        YTSearch({ key: API_KEY, term: 'jain' }, videos => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));
