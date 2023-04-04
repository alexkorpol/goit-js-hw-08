// !=================================import libraries ==================================
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// !=================  Block "Declare of constants & variables"==========================
const KEY_PLAYER_TIME = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');

// !======================= Block "Main programm" ===================================
const player = new Player(iframe);
const writeCurrentTimeOfPlayer =  (currentTime) => {
  const playedTime = currentTime.seconds;
  localStorage.setItem(KEY_PLAYER_TIME, JSON.stringify(playedTime));
};

player.on('timeupdate', throttle(writeCurrentTimeOfPlayer, 1000));

const restoryTimePlayer = localStorage.getItem(KEY_PLAYER_TIME);
player.setCurrentTime(restoryTimePlayer || 0);

// !================================= EOF =========================================


