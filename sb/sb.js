function play(audioId) {
  if (audioId) {
    document.getElementById(audioId).play();
  } else {
    console.error("Error!");
  }
}
