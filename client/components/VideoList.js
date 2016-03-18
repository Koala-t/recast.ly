var VideoList = (props) => (
  <div className="video-list media">
  console.log(exampleVideoData);
    {props.exampleVideoData.map(datum => 
      <VideoListEntry datum={datum} />
    )};
  </div>
);

window.VideoList = VideoList;