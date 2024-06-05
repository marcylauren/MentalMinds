let videos = [
  [
    "https://www.youtube-nocookie.com/embed/C07DdQbnFMs?si=J41QuzG0PQEZWmTl",
    "https://www.youtube-nocookie.com/embed/VeTjLtwJQnA?si=WrxfU0bSh9_PIV1J",
    "https://www.youtube-nocookie.com/embed/yTNN_0j5S2Q?si=-FEcFj5xMl30kYc8"
  ],
  [
    "https://www.youtube-nocookie.com/embed/kvaHRdgLjbE?si=uX-Ev_FORCD6m3Vu",
    "https://www.youtube-nocookie.com/embed/uL9OczDLvYs?si=-4-cb-mCUrCAbvC6",
    "https://www.youtube-nocookie.com/embed/_HEnohs6yYw?si=yJYes0MgGOMJsoRi"
  ]
]

let videoPlayer = document.querySelectorAll(".video-all");
let leftArrow = document.querySelectorAll(".left");
let rightArrow = document.querySelectorAll(".right");
let videoIndices = Array.from(Array(videos.length), () => 0); // list of "0" n times


for (let i = 0; i < videoPlayer.length; i++) {
  videoPlayer[i].src = videos[i][videoIndices[i]];
  leftArrow[i].addEventListener('click', () => {
    videoIndices[i] = (videoIndices[i] + videos[i].length - 1) % videos[i].length;
    videoPlayer[i].src = videos[i][videoIndices[i]];

    playAgain(videoPlayer[i]);
  });
  rightArrow[i].addEventListener('click', () => {
    videoIndices[i] = (videoIndices[i] + videos[i].length + 1) % videos[i].length;
    videoPlayer[i].src = videos[i][videoIndices[i]];

    playAgain(videoPlayer[i]);
  });
}

function playAgain(theVideoPlayer) {
  theVideoPlayer.classList.remove("fade-in")
  requestAnimationFrame((_) => {
    requestAnimationFrame((_) => {
      theVideoPlayer.classList.add("fade-in");
    });
  });
}