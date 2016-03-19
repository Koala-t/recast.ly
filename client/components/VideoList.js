class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="video-list media">
        {this.props.exampleVideoData.map(datum => 
          <VideoListEntry datum={datum} />
        )};
      </div>
    );
  }
}

window.VideoList = VideoList;