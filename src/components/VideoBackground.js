import React, {Component} from 'react'

class VideoBackground extends Component {
  render(){
    return(
      <div className="videoPlayer" style={{position: "fixed", zIndex: "-99", width: "100%", height: "100%"}}>
        <iframe height="120%" width="120%" src={`https://www.youtube.com/embed/${this.props.videoId}?autoplay=1&Version=3&loop=1&playlist=${this.props.videoId}&controls=0&showinfo=0`} frameBorder="0" allowFullScreen>
        </iframe>

      </div>
    )
  }
}

export default VideoBackground
