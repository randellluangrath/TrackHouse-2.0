
import React, { Component } from 'react';
import SongsService from '../services/songs-service';

export default class Customers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedArtistId: 1
        }
    }

    async componentDidMount() {
        await this.getSongsByArtistId(this.state.selectedArtistId);
    }

    async getSongsByArtistId(artistId) {
        await SongsService.getSongsByArtistId(artistId);
    };

    render() {
        return <div></div>
    }
}