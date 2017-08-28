import ReactDOM from 'react-dom'
import React,{Component} from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from "./component/search-bar.component"
import VideoList from "./component/video-list.component"
import VideoDetail from "./component/video-detail.component"

const API_KEY = "AIzaSyASxeLmKlYrOzjsQfegNOAYBxU4_UQWyts";

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            videos:[],
            selectedVideo:null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term},(videos) => {
            console.log(videos);
            this.setState({videos}) // this.setState({videos:videos})
            this.setState({selectedVideo:videos[0]})
        })
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermInputChange={(term)=>{this.videoSearch(term)}} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo)=>{this.setState({selectedVideo})}}
                    videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('reactApp'))