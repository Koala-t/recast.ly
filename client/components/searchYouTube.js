window.searchYouTube = function(options, callback) { 
  var url = 'https://www.googleapis.com/youtube/v3/search?';
  $.get(url, options, data => {
    console.log(data);
  }).done( (data) => {
    callback(data.items);
  });
};
