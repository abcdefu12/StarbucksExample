// IFRAME PLAYER API

//loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //재생할 유튜브 영상ID
    playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'An6LvWQuj_8'
    },
    events: {
        onReady: function(event) {
            event.target.mute()
        }
    }
  });
}