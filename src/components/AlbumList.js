import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount = () => {
       axios.get('https://api.myjson.com/bins/ekoun')
       .then(response => this.setState({ albums: response.data }));     
    }

    renderAlbums() {
        return this.state.albums.map(albums => 
        <AlbumDetail key={albums.title} albums={albums} />
        );
    }
    
    render() {
        console.log(this.state);
    return (
        <ScrollView>
            {this.renderAlbums() }
        </ScrollView>
        );
    }
}

export default AlbumList;
