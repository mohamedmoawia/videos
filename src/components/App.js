import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../Apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.onFormSubmit('youtube');
    }
    onFormSubmit = async input => {
        const response = await youtube.get("/search?part=snippet&maxResult=5&key=AIzaSyCm4UAQzqxONt48efcDGsrbGcQHmSZp-l8", {
            params: {
                q: input
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    onSelectVideo = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    render() {
        return (
            <div>
                <SearchBar onFormSubmit={this.onFormSubmit} />
                
                    <div style={{display: 'flex',width: '75%', marginLeft:'auto', marginRight: 'auto'}} >
                        <div >
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div >
                            <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
                        </div>
                    </div>

            </div>
        );
    }
}

export default App