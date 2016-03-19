class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.datum.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.props.datum.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.datum.snippet.description}</div>
        </div>
      </div>
    );
  }
  
}

window.VideoListEntry = VideoListEntry;
