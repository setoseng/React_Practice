import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
const API_KEY = 'AIzaSyAzTM4GAdj023X02Eaf8qK2kLU3P-pvVVQ';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
     };

    YTSearch({key: API_KEY, term:'kendrick lamar'}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0],
       });
  //  this.setState({videos: videos}); ONLY WORKS WHEN KEY AND PROPERTY ARE SAME
    });
  }

  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
