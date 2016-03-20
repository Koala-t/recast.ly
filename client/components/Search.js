var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" id="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={(e)=>
      props.handleSearchEntry($('#form-control').val())}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;
