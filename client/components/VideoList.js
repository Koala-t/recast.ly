var VideoList = (props) => (
  <div className="video-list media">
    {props.exampleVideoData.map(datum => 
      <VideoListEntry datum={datum} handleVideoListEntry={props.handleVideoListEntry}/>
    )};
  </div>
);


window.VideoList = VideoList;

