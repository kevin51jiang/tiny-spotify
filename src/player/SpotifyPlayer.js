import React, { Component } from 'react';
import axios from 'axios';

import { default_item } from './default';
import { barUpdateincrement, infoUpdateIncrement } from '../config';
import Player from "./Player";

import './SpotifyPlayer.css';


const BASE_API = "https://api.spotify.com/v1/me/player/";

class SpotifyPlayer extends Component {

    constructor() {
        super();

        this.state = {
            item: default_item,
            progress_ms: 0
        };

        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
        this.tick = this.tick.bind(this);
    }

    /**
     * Send POST request to move to previous song
     * todo: if the user is >10% through song, move song to beginning, but don't go to previous song
     */
    async stepBack() {
        const cutoff = 20000; // time before seeking to start instead of going to previous track (ms)

        if (this.state.progress_ms < cutoff) { // go to previous track
            await axios.post(`${BASE_API}previous`,
                {},
                { headers: { 'Authorization': "Bearer " + this.props.token } })
                .catch(e => console.log(e));
        } else { // go to start of current track
            await axios.put(`${BASE_API}seek`,
                {},
                {
                    headers: { 'Authorization': "Bearer " + this.props.token },
                    params: { position_ms: 0 }
                })
                .catch(e => console.log(e));
        }


    }

    /**
     * Send POST request to move to next song
     */
    async stepForward() {
        await axios.post(`${BASE_API}next`,
            {},
            { headers: { 'Authorization': "Bearer " + this.props.token } })
            .catch(e => console.log(e));
    }

    /**
     * Send PUT request to pause/play
     */
    async togglePlay() {
        if (this.state.is_playing) { //if playing, then pause
            await axios.put(`${BASE_API}pause`,
                {},
                { headers: { 'Authorization': "Bearer " + this.props.token } })
                .catch(e => console.log(e));
        } else { //if paused, then play
            await axios.put(`${BASE_API}play`,
                {},
                { headers: { 'Authorization': "Bearer " + this.props.token } })
                .catch(e => console.log(e));
        }

        this.setState({ is_playing: !this.state.is_playing }); //invert is_playing

    }

    async getCurrentlyPlaying(token) {
        await axios.get(BASE_API,
            { headers: { 'Authorization': "Bearer " + token } })
            .then(res => {
                if (res.data) {
                    this.setState({
                        item: res.data.item,
                        is_playing: res.data.is_playing
                    });
                    // only update if the counter is greater than 2 seconds off
                    // so that bar doesn't jump back and forth often 
                    if (Math.abs(this.state.progress_ms - res.data.progress_ms) > 2000) {
                        this.setState({
                            progress_ms: res.data.progress_ms
                        });
                    }
                } else {// if Spotify doesn't think you're listening to a song
                    this.setState({
                        item: default_item,
                        progress_ms: 0
                    })
                }
            })
            .catch(err => console.log(JSON.parse(JSON.stringify(err))));
    }

    componentDidMount() {
        this.barInterval = setInterval(() => this.updateBar(), barUpdateincrement);
        this.interval = setInterval(() => this.tick(), infoUpdateIncrement);
    }


    updateBar() {
        if (this.props.token && this.state.is_playing) {
            this.setState({
                progress_ms: this.state.progress_ms + barUpdateincrement
            });

        }
    }

    tick() {
        if (this.props.token) {
            this.getCurrentlyPlaying(this.props.token);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div className="Main-window">
                {!this.props.token && (

                    <span>Please log in first</span>
                )}
                {this.props.token && (
                    <Player
                        item={this.state.item}
                        is_playing={this.state.is_playing}
                        progress_ms={this.state.progress_ms}
                        stepBack={this.stepBack.bind(this)}
                        stepForward={this.stepForward.bind(this)}
                        togglePlay={this.togglePlay.bind(this)}
                    />
                )}
            </div>
        )
    }


}


export default SpotifyPlayer;