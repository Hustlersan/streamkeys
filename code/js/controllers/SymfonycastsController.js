"use strict";
(function() {
  var BaseController = require("BaseController");

  new BaseController({
    siteName: "symfonycasts",
    playPause: ".vjs-play-control",
    playNext: ".pn-button-holder:nth-child(3) > a",
    playPrev: ".pn-button-holder:nth-child(1) > a",
    mute: ".vjs-mute-control",

    playState: ".vjs-play-control:not(.vjs-paused)",
    song: ".highlight-header",
    artist: ""
  });
})();
