var videoReady = function () {
  var videoEl = $('.nf-big-play-pause') || $('.video-container');
  if (videoEl.length) {
    $('body').on('mouseup', function (e) {
      videoEl = $('.nf-big-play-pause') || $('.video-container');
      console.log(e.button, e.target, videoEl[0]);
      if (e.button === 0 && e.target == videoEl[0]) {
        var ppEl = $('button[aria-label=Play]')[0] || $('button[aria-label=Pause]')[0];
        $(ppEl).click();
      }
    });
  } else {
    setTimeout(videoReady, 500);
  }
}
setTimeout(videoReady, 1000);
