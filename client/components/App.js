class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleVideoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  render() {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer startVideo={exampleVideoData[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList exampleVideoData={exampleVideoData}/>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//fix import/export
// export module App;