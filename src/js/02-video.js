import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);

  player.on('play', function () {
    console.log('played the video!');
  });

  player.getVideoTitle().then(function (title) {
    console.log('title:', title);
  });

  player.on(
    'timeupdate',
    throttle(function (data) {
      const currentTime = Math.floor(data.seconds);
      localStorage.setItem('videoplayer-current-time', currentTime.toString());
    }, 1000)
  );

  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime) {
    player.setCurrentTime(parseInt(storedTime, 10));
  }
});
