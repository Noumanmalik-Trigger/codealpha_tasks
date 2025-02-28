const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const volumeControl = document.getElementById("volumeControl");
const volumeLabel = document.getElementById("volumeLabel");
const progressBar = document.getElementById("progressBar");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");

playBtn.addEventListener("click", function () {
  audio.play();
});

pauseBtn.addEventListener("click", function () {
  audio.pause();
});

stopBtn.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
});

volumeControl.addEventListener("input", function () {
  audio.volume = volumeControl.value;
  volumeLabel.textContent = `Volume: ${Math.round(volumeControl.value * 100)}%`;
});

audio.addEventListener("timeupdate", function () {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  progressBar.value = (currentTime / duration) * 100;
  currentTimeLabel.textContent = formatTime(currentTime);
  durationLabel.textContent = formatTime(duration);
});

progressBar.addEventListener("input", function () {
  const duration = audio.duration;
  audio.currentTime = (progressBar.value / 100) * duration;
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}
