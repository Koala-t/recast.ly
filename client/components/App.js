class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleVideoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  // make a callback function to be passed to a lower component and called there
  //what is this.state at this point?
  handleVideoListEntry(video) {
    this.setState({currentVideo: video});
  }
  
  render() {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer startVideo={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList exampleVideoData={exampleVideoData} handleVideoListEntry={this.handleVideoListEntry.bind(this)} />
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App api="YOUTUBE_API"/>, document.getElementById('app'));