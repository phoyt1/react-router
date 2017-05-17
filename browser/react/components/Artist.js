import React from 'react'
import Albums from './albums'
import axios from 'axios'
import {convertAlbums, convertAlbum, skip , convertSong} from '../utils.js'

class Artist extends React.Component {
    // = (props)=>{
    // const albums = props.albums;
    // const artist = props.name;
    // const songs = props.songs;


    constructor(){
        super()
        this.state = {
            artistName: '',
            albums: [],
            songs: []
        }
        console.log(convertAlbums)
        // this.utils.convertAlbums = this.utils.convertAlbums.bind(this)
    }

    componentDidMount(){
        const artistId = this.props.routeParams.artistId
        console.log(this.props)
        axios.get(`/api/artists/${artistId}`)
        .then(res => res.data)
        .then(artist => {
            console.log(artist.name)
            this.setState({artistName: artist.name})
        })

        axios.get(`/api/artists/${artistId}/albums`)
        .then(res => res.data)
        .then(albums => this.setState({albums: convertAlbums(albums)}))

        axios.get(`/api/artists/${artistId}/songs`)
        .then(res => res.data)
        .then(songs => this.setState({songs: songs}))

    }

    render(){
        return (
            <div>
                <h3>{this.state.artistName}</h3>
                <div>
                    <Albums albums={this.state.albums} />
                </div>

                <h4>SONGS</h4>
            </div>
        )
    }
}

export default Artist