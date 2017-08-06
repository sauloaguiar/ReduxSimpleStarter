import React, { Component } from 'react';
import _ from 'lodash'; 
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const apiKey = 'AIzaSyCCMnRfaQCHySYDOpNZ9X1C1Ch7pUGg77w';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: apiKey, term}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
      console.log(videos);
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
