const musicData = {
  Bollywood: [
    {  name: "Unknown", file: "music/song1.mp3", image: "images/logo.jpg"  },
        {  name: "Ban ja tu meri rani", file: "music/song1.mp3", image: "https://res.cloudinary.com/dmw40bais/image/upload/v1751785158/music/thumbnail/banjarani.jpg"  },
    { name: "Lal Pari", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141329/music/Bollywood/lalpari.mp3", image: "images/Bollywood/lalpari.jpg" },
    { name: "Kabhi kabhi Aditi", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141299/music/Bollywood/kabhi%20aditi.mp3", image: "images/Bollywood/kabhiaditi.jpg" },
    { name: "Chikni Chameli", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141369/music/Bollywood/chiknichameli.mp3", image: "images/Bollywood/chiknichameli.jpg" },
    { name: "Ud-daa Punjab", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141345/music/Bollywood/udtapunjab.mp4", image: "images/Bollywood/Ud-daa Punjab.jpg" },
    { name: "Character Dheela", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141377/music/Bollywood/charactrdheela.mp3", image: "images/Bollywood/characterdheela.jpg" },
    { name: "Dil Ka Telephone", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141282/music/Bollywood/dilkatelephone.mp4", image: "images/Bollywood/dilkatele.jpg" },
     { name: "Kukkad kamal da", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141334/music/Bollywood/kukkad.mp4", image: "images/Bollywood/kukkad.jpg" },
    { name: "Tum Hi Ho", file: "music/song1.mp3", image: "images/Bollywood/tunhi.jpg" },
    {  name: "Unknown", file: "music/song1.mp3", image: "images/logo.jpg"  }
  ],
  Punjabi: [
    { name: "Water - Diljit Dosanjh", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141395/music/Punjabi/water.mp3", image: "images//Punjabi/water.jpg" },
    { name: "Born to Shine", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141338/music/Punjabi/borntoshine.mp3", image: "images/Punjabi/borntoshine.jpg" }
  ],
   Bhojpuri: [
    { name: "Heroine", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141305/music/Bhojpuri/heroine.mp3", image: "images/Bhojpuri/heroine.jpg" },
    { name: "Bullet Pa Jija", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141337/music/Bhojpuri/bulletpajija.mp3", image: "images/Bhojpuri/bulletpajija.jpg" },
     {  name: "Unknown", file: "music/song1.mp3", image: "images/logo.jpg"  }
  ],

   Haryanvi: [
    { name: "Solid Body", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141303/music/Haryanvi/solidbody.mp3", image: "images/Haryanvi/solidbody.jpg" },
    { name: "8 Parche", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141358/music/Haryanvi/8parche.mp3", image: "images/Haryanvi/8parche.jpg" },
    {  name: "Chandigarh", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141322/music/Haryanvi/chandigarh.mp4", image: "images/logo.jpg"  },
      {  name: "Feelings", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1751785719/music/Haryanvi/Sumit_Goswami_-_Feelings___KHATRI___Deepesh_Goyal___Haryanvi_Song_2020_mjb8d7.mp4", image: "https://res.cloudinary.com/dmw40bais/image/upload/v1751784891/music/feelings.jpg"  },

    {  name: "Unknown", file: "music/song1.mp3", image: "images/logo.jpg"  },

  ],
  
  Rap: [
     {  name: "Millanaoire-Honey Singh", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141374/music/Rap/milliaonare.mp3", image: "images/Rap/millanaire.jpg"  },
    { name: "Apna Time Aayega", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749018161/fymheywhqwxxcohfsowo.mp3", image: "images/logo.jpg" },
    { name: "Mere Gully Mein", file: "music/mere_gully_mein.mp3", image: "images/logo.jpg" },
     {  name: "Unknown", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749018161/fymheywhqwxxcohfsowo.mp3", image: "images/logo.jpg"  }
  ],
  Bhakti: [
    { name: "Janki Janki", file: "https://res.cloudinary.com/dmw40bais/video/upload/v1749141402/music/Bhakti/jankijanki.mp3", image: "images/Bhakti/jankijanki.jpg" },
    { name: "Unknown", file: "music/mere_gully_mein.mp3", image: "images/logo.jpg" },
     {  name: "Unknown", file: "music/song1.mp3", image: "images/logo.jpg"  }
  ],

  // ... other categories
};

const categoryImages = {
  Bollywood: "images/logo.jpg",
  Punjabi: "images/logo.jpg",
  Rap: "images/logo.jpg",
   Bhojpuri:"images/logo.jpg",
 Bhakti: "images/logo.jpg",
  Haryanvi:"images/logo.jpg",
};

let allSongs = [];
let currentIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playlist = document.getElementById("playlist");

// Flatten all songs with category
for (const category in musicData) {
  musicData[category].forEach(song => {
    allSongs.push({ ...song, category });
  });
}

const songImage = document.getElementById("song-image");

function loadSong(index) {
  const song = allSongs[index];
  audio.src = song.file;
  title.textContent = `${song.name} (${song.category})`;

  // Update song image or use default
  songImage.src = song.image || "images/logo.jpg";

  highlightSong(index);
}

function togglePlay() {
  if (audio.paused) audio.play();
  else audio.pause();
}

function nextSong() {
  currentIndex = (currentIndex + 1) % allSongs.length;
  loadSong(currentIndex);
  audio.play();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + allSongs.length) % allSongs.length;
  loadSong(currentIndex);
  audio.play();
}

function highlightSong(index) {
  const items = playlist.querySelectorAll("li");
  items.forEach((li, i) => {
    li.classList.toggle("active", i === index);
  });
}

let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

function toggleFavourite(song) {
  const favIndex = favourites.findIndex(f => f.name === song.name && f.category === song.category);
  if (favIndex > -1) {
    favourites.splice(favIndex, 1);
  } else {
    favourites.push(song);
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
  buildPlaylist(); // Refresh list to update icons
}

function isFavourite(song) {
  return favourites.some(f => f.name === song.name && f.category === song.category);
}

function buildPlaylist(data = musicData) {
  playlist.innerHTML = "";

  // Add Favourites Section
if (favourites.length > 0) {
  const favHeader = document.createElement("div");
  favHeader.className = "category-header";

  const img = document.createElement("img");
  img.src = "images/heart.png"; // badal loo
  img.alt = "Favourites";

  const label = document.createElement("span");
  label.textContent = "Favourites";

  favHeader.appendChild(img);
  favHeader.appendChild(label);

  const favList = document.createElement("ul");
  favList.className = "song-list";

  favHeader.onclick = () => {
    favList.style.display = favList.style.display === "block" ? "none" : "block";
  };

  favourites.forEach(favSong => {
    const li = document.createElement("li");
    li.textContent = favSong.name;

    const favBtn = document.createElement("span");
    favBtn.textContent = "❤️";
    favBtn.style.float = "right";
    favBtn.style.cursor = "pointer";
    favBtn.onclick = (e) => {
      e.stopPropagation();
      toggleFavourite(favSong);
      buildPlaylist(); // Refresh to reflect change
    };

    li.appendChild(favBtn);

    // 🔍 Try to find the exact song in allSongs
    const songIndex = allSongs.findIndex(
      s =>
        s.name === favSong.name &&
        s.file === favSong.file &&
        s.category === favSong.category
    );

    li.onclick = () => {
      if (songIndex !== -1) {
        currentIndex = songIndex;
        loadSong(currentIndex);
        audio.play();
      } else {
        // 🔁 If song not in allSongs, load directly
        audio.src = favSong.file;
        title.textContent = favSong.name + " (Favourites)";
        songImage.src = favSong.image || "images/logo.jpg";
        audio.play();
      }
    };

    favList.appendChild(li);
  });

  playlist.appendChild(favHeader);
  playlist.appendChild(favList);
}

  // 🔄 Loop through categories and build playlist
  for (const category in data) {
    const categoryHeader = document.createElement("div");
    categoryHeader.className = "category-header";

    const img = document.createElement("img");
    img.src = categoryImages[category] || "images/default.jpg";
    img.alt = category;

    const label = document.createElement("span");
    label.textContent = category;

    categoryHeader.appendChild(img);
    categoryHeader.appendChild(label);

    const songList = document.createElement("ul");
    songList.className = "song-list";

    categoryHeader.onclick = () => {
      songList.style.display = songList.style.display === "block" ? "none" : "block";
    };

    data[category].forEach(song => {
      const li = document.createElement("li");

      const favBtn = document.createElement("span");
      favBtn.textContent = isFavourite(song) ? "❤️" : "🤍";
      favBtn.style.float = "right";
      favBtn.style.cursor = "pointer";
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavourite(song);
      };

      li.textContent = song.name;
      li.appendChild(favBtn);

      const songIndex = allSongs.findIndex(
        s => s.name === song.name && s.category === category
      );

      li.onclick = () => {
        currentIndex = songIndex;
        loadSong(currentIndex);
        audio.play();
      };

      songList.appendChild(li);
    });

    playlist.appendChild(categoryHeader);
    playlist.appendChild(songList);
  }
}



buildPlaylist();
loadSong(currentIndex);

const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const timestamp = document.getElementById("timestamp");


// Update progress bar and timestamp as song plays
audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;
  const progressPercent = (currentTime / duration) * 100 || 0;
  progress.style.width = `${progressPercent}%`;

  timestamp.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
});

// Auto-play next song when current ends
audio.addEventListener("ended", nextSong);


// Format seconds to mm:ss
function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
}

// Seek audio when clicking on progress bar
function setProgress(e) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}


// Shuffle ke liye

let isShuffle = false;
function toggleShuffle() {
  isShuffle = !isShuffle;
  alert("Shuffle " + (isShuffle ? "On" : "Off"));
}

function nextSong() {
  if (isShuffle) {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * allSongs.length);
    } while (nextIndex === currentIndex); 

    currentIndex = nextIndex;
  } else {
    currentIndex = (currentIndex + 1) % allSongs.length;
  }
  loadSong(currentIndex);
  audio.play();
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  const button = document.querySelector(".controls button:last-child");
  button.classList.toggle("active", isShuffle);
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const filteredData = {};

  for (const category in musicData) {
    const songs = musicData[category].filter(song =>
      song.name.toLowerCase().includes(query)
    );
    if (songs.length > 0) {
      filteredData[category] = songs;
    }
  }

  buildPlaylist(filteredData); // Use filtered data
});

//Volume ke liye
const volumeSlider = document.getElementById("volume");

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});
