class App extends React.Component {
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
 