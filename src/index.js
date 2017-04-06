import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Link from './components/link';

import '../style/style.css';
const API_KEY = 'AIzaSyDvW1wpGMwO4lgBSFj4vM8-k5k4MG1L6ec';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			videos : [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
	}
	
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});		
	}
	
	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} 
				/>
				<Link keyword={'What is your name?'} onButtonTermChange={term => this.videoSearch(term)} />
				<Link keyword={'How are you?'} onButtonTermChange={term => this.videoSearch(term)} />
				<Link keyword={'Where are you from?'} onButtonTermChange={term => this.videoSearch(term)} />
				<Link keyword={'What is your address?'} onButtonTermChange={term => this.videoSearch(term)} />
				<Link keyword={'Where do you live?'} onButtonTermChange={term => this.videoSearch(term)} />
				<Link keyword={'What did you do?'} onButtonTermChange={term => this.videoSearch(term)} />
				<Link keyword={'Can you speak English?'} onButtonTermChange={term => this.videoSearch(term)} />
				<Link keyword={'What time is it?'} onButtonTermChange={term => this.videoSearch(term)} />
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
