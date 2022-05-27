import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import {SearchBar,VideoDetail,VideoList} from './components';

import youtube from "./api/youtube";

class App extends Component {
    state= {
        video:[],
        selectedVideo:null
    }

    componentDidMount() {
        this.handleSubmit('warzone')
        
        
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    
    handleSubmit = async (searchTerm) => {

        

        const response = await youtube.get('search',{
            params: {
                part:'snippet',
                maxResults:5,
                key:'AIzaSyDupOe9lBs9BTuU_tzmWqaWK13e46MQM4I',
                q:searchTerm
            }
        })

        this.setState({video:response.data.items, selectedVideo:response.data.items[0] })

    }
    render(){
        const {selectedVideo, video} = this.state
        return (
            <div className="container-fluid">
                <div className="row">
                        <div className="col-md-12">
                            <SearchBar onFormSubmit={this.handleSubmit} video={video} />
                        </div>
                </div>        
                <div className="row">
                     <div className="col-md-8">
                        <VideoDetail video={selectedVideo}/>
                     </div>
                     <div className="col-md-4">
                        <VideoList video={video} onVideoSelect={this.onVideoSelect} />
                     </div>
                </div>   
            </div>
        )
    }
}

export default App;