// Global Variables

const wrapper = document.querySelector('.wrapper');
const musicName = document.querySelector('.name');
const musicImg = document.querySelector('img');
const musicArtist = document.querySelector('.artist');
const audio = document.querySelector('#audio');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const playPauseBtn = document.querySelector('#play_pause');
const progressArea = document.querySelector('.progress_area');
const progressBar = document.querySelector('.progress_bar');
const progressLine = document.querySelector('.progress_line');
const currentTimeElem = document.querySelector('.current_time');
const maxDuration = document.querySelector('.max_duration');

let isMusicPlay = false;

// For Playing Music Btn

const playMusic = () => {
  isMusicPlay = true;
  audio.play();
  playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  musicImg.classList.add('rotation');
};

// For Pause Music Btn

const pauseMusic = () => {
  isMusicPlay = false;
  audio.pause();
  playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  musicImg.classList.remove('rotation');
};

playPauseBtn.addEventListener('click', () => {
  isMusicPlay ? pauseMusic() : playMusic();
});

// Change the Song data
const loadTracks = (tracks) => {
  musicName.textContent = tracks.name;
  musicArtist.textContent = tracks.artist;
  audio.src = `tracks/${tracks.music}.mp3`;
  musicImg.src = `img/${tracks.img}.jpg`;
};

let index = 0;

// Next Song Btn
const nextSong = () => {
  index = (index + 1) % tracks.length;
  loadTracks(tracks[index]);
  playMusic();
};

// Previous Song Btn
const prevSong = () => {
  index = (index - 1 + tracks.length) % tracks.length;
  loadTracks(tracks[index]);
  playMusic();
};

// Progress Time Update

audio.addEventListener('timeupdate', (event) => {
  const { currentTime, duration } = event.srcElement;

  let progressTime = (currentTime / duration) * 100;
  progressBar.style.left = `${progressTime}%`;

  progressLine.style.width = `${progressTime}%`;

  // Total Duration of Music player of a song
  let mintDuration = Math.floor(duration / 60);
  let secDuration = Math.floor(duration % 60);
  if (mintDuration < 10) {
    mintDuration = `0${mintDuration}`;
  }
  if (secDuration < 10) {
    secDuration = `0${secDuration}`;
  }
  if (duration) {
    maxDuration.innerHTML = `${mintDuration} : ${secDuration}`;
  }

  //   Current time  of Music player of a song
  let mintCurrent = Math.floor(currentTime / 60);
  let secCurrent = Math.floor(currentTime % 60);
  if (secCurrent < 10) {
    secCurrent = `0${secCurrent}`;
  }
  if (mintCurrent < 10) {
    mintCurrent = `0${mintCurrent}`;
  }
  currentTimeElem.innerHTML = `${mintCurrent} : ${secCurrent}`;
});

// Click to Change tha position of  Progress bar

progressArea.addEventListener('click', (e) => {
  const { duration } = audio;
  let moveProgress = (e.offsetX / e.srcElement.clientWidth) * duration;
  audio.currentTime = moveProgress;
});

// If a song ended automatic play another

audio.addEventListener('ended', nextSong);

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
