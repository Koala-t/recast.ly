class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleVideoData: exampleVideoData,
      currentVideo: exampleVideoData[0],
      q: 'cat'
    };
  }

  // make a callback function to be passed to a lower component and called there
  //what is this.state at this point?
  handleVideoListEntry(video) {
    this.setState({currentVideo: video});
  }

  handleSearchEntry(query) {
    searchYouTube({
      part: 'snippet',
      key: this.props.api,
      q: query,
      maxResults: 8
    }, videos =>
      this.setState({
        currentVideo: videos[0],
        exampleVideoData: videos
      })
    );
    
  }

  componentDidMount() {
    var options = {
      part: 'snippet',
      key: this.props.api,
      q: this.state.q,
      maxResults: 8
    };

    searchYouTube(options, videos =>
      this.setState({
        currentVideo: videos[0],
        exampleVideoData: videos
      })
    );
  }
  
  render() {
    return (
    <div>
      <Nav handleSearchEntry={this.handleSearchEntry.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer startVideo={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList exampleVideoData={this.state.exampleVideoData} handleVideoListEntry={this.handleVideoListEntry.bind(this)} />
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App api={YOUTUBE_API_KEY}/>, document.getElementById('app'));