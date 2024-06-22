
/* 
const button = document.querySelector('.layaout');
const playlist = document.querySelector('.playlist');

button.addEventListener('click' , function(){

playlist.style.left

})
*/


const sidebar = document.getElementById('sidebar');
const centerContainer = document.getElementById('principal');
let playPauseBtn;
let nextBtn;
let prevBtn;
let audioElement;
let currentSongIndex = 0;

const songs = [
    {
        id: 1,
        title: 'La hora del Juicio',
        artist: 'Canserbero',
        img: "img/disco_muerte.jpg",
        audio: "audio/Canserbero - La Hora del Juicio [Muerte].mp3"
    },
    {
        id: 2,
        title: 'Sweet Chil\'d of Mine',
        artist: 'Gun\'s Roses',
        img: "img/Apettite_For_Destruccion.jpg",
        audio: "audio/Guns N  Roses - Sweet Child O  Mine (Official Music Video).mp3"
    },
    {
        id: 3,
        title: 'Hard School',
        artist: 'Gun\'s Roses',
        img: "img/Hard_school.jpg",
        audio: "audio/Guns N  Roses - Hard Skool (Audio).mp3"
    },
    {
        id: 4,
        title: 'So Fine',
        artist: 'Gun\'s Roses',
        img: "img/2.jpeg",
        audio: "audio/Guns N  Roses - So Fine (Visualizer).mp3"
    },
    {
        id: 5,
        title: 'Ya para qué',
        artist: 'Nanpa Básico',
        img: "img/segun_nosotros.jpeg",
        audio: "audio/Nanpa Básico - Ya Para Qué.mp3"
    },
    {
        id: 6,
        title: 'You Sent My Flying',
        artist: 'Amy Winehouse',
        img: "img/frank.jpeg",
        audio: "audio/Amy Winehouse - You Sent Me Flying ; Español - Inglés _ HD.mp3"
    },
    {
        id: 7,
        title: 'Vuelve',
        artist: 'Santu',
        img: "img/R.jpeg",
        audio: "audio/VUELVE - SANTU (VIDEO OFICIAL).mp3"
    },
    {
        id: 8,
        title: 'Poesía',
        artist: 'Los Aldeanos',
        img: "img/desacato.jpeg",
        audio: "audio/Los Aldeanos   poesia  con letra    feat silvito el libre y mucha rima.mp3"
    }
];

const songElements = sidebar.getElementsByTagName('h2');

for (const [index, song] of songs.entries()) {
    songElements[index].addEventListener('click', () => {
        currentSongIndex = index;
        displaySongInfo(song.title, song.artist, song.img, song.audio);
    });
}

function displaySongInfo(title, artist, img, audio) {
    centerContainer.innerHTML = `
        <header>
            <div class="waves">
                <h1>Reproducir</h1>
            </div>
            <div class="boton">
                <button class="layout">PlayList <i class='bx bx-right-arrow-alt bx-tada bx-flip-horizontal'></i></button>
            </div>
        </header>
        <img src="${img}" class="caratula" alt="">
        <h1 class="titulo">${title}</h1>
        <p class="autor">${artist}</p>
        <audio id="audio" autoplay src="${audio}"></audio>
        <div class="reproduccion">
            <div class="progress">
                <div class="progress_bar"></div>
            </div>
        </div>
        <div class="duracion">
            <p id="current_duration">0:00</p>
            <p id="total_duration">0:00</p>
        </div>
        <div class="botones">
            <img class="icon" id="anterior" src="svg/arrow-left-solid.svg" alt="#">
            <img class="icon" id="play_pause_btn" src="img/boton-de-pausa.png" alt="#">
            <img class="icon" id="siguiente" src="svg/arrow-right-solid.svg" alt="#">
        </div>
    `;

    audioElement = document.getElementById('audio');
    playPauseBtn = document.getElementById('play_pause_btn');
    nextBtn = document.getElementById('siguiente');
    prevBtn = document.getElementById('anterior');

    playPauseBtn.addEventListener('click', togglePlayPause);
    nextBtn.addEventListener('click', playNext);
    prevBtn.addEventListener('click', playPrevious);

    audioElement.addEventListener('timeupdate', updateProgress);
    audioElement.addEventListener('loadedmetadata', () => {
        document.getElementById('total_duration').textContent = formatTime(audioElement.duration);
    });
}

function togglePlayPause() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseBtn.src = "img/boton-de-pausa.png";
    } else {
        audioElement.pause();
        playPauseBtn.src = "img/jugar-buttton.png";
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    const nextSong = songs[currentSongIndex];
    displaySongInfo(nextSong.title, nextSong.artist, nextSong.img, nextSong.audio);
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    const prevSong = songs[currentSongIndex];
    displaySongInfo(prevSong.title, prevSong.artist, prevSong.img, prevSong.audio);
}

function updateProgress() {
    const currentDuration = document.getElementById('current_duration');
    const progressBar = document.querySelector('.progress_bar');

    currentDuration.textContent = formatTime(audioElement.currentTime);
    progressBar.style.width = (audioElement.currentTime / audioElement.duration) * 100 + '%';
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}






























/*
let songIndex = 0;


function loadSong(song) {
  audio.src = song.file;
  songTitle.textContent = song.name;
  songImage.src = song.image;
}


function loadSongDetails(song) {
  songTitle.textContent = song.name;
  songImage.src = song.image;
}


function playSong() {
  audio.play();
  play.innerHTML = '<i class="fas fa-pause"></i>';
}


function pauseSong() {
  audio.pause();
  play.innerHTML = '<i class="fas fa-play"></i>';
}


function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}


function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}


function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  currentTime.textContent = formatTime(currentTime);
}


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}


function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;


  audio.currentTime = (clickX / width) * duration;
}


loadSong(songs[songIndex]);


play.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});


audio.addEventListener('timeupdate', updateProgress);


prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);


progress.addEventListener('click', setProgress);


audio.addEventListener('ended', nextSong);

*/