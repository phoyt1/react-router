import React from 'react';
import Songs from '../components/Songs';

export default class Album extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      album: {},
      currentSong: {},
      isPlaying: false,
      toggleOne: undefined
    }
    console.log(props)
  }

componentDidMount(){
  const albumId = this.props.routeParams.albumId;
  const selectAlbum = this.props.selectAlbum;

  selectAlbum(albumId);
}


  //console.log(props);
  render(){
    var { album } = this.props
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );
  }

}
