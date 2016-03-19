var VideoPlayer = (props) => (
  // {var address = "https://www.youtube.com/embed/" + {props.startVideo.id.videoId} + "?autoplay=1"}

  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + props.startVideo.id.videoId + "?autoplay=1"} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.startVideo.snippet.title}</h3>
      <div>{props.startVideo.snippet.description}</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;
