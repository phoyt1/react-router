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
  }

componentDidMount(){
  const albumId = this.props.routeParams.albumId;
  const selectAlbum = this.props.selectAlbum;

  selectAlbum(albumId);
}


  //console.log(props);
  render(){
    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          toggleOne={toggleOne} />
      </div>
    );
  }

}
