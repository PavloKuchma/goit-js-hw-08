import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(VIDEO_CURRENT_TIME, JSON.stringify(data.seconds));
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(VIDEO_CURRENT_TIME))
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
