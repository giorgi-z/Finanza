const story = document.getElementById("story");
const mission = document.getElementById("mission");
const vision = document.getElementById("vision");

const storyParagraph = document.getElementById("story-tab");
const missionParagraph = document.getElementById("mission-tab");
const visionParagraph = document.getElementById("vision-tab");

story.addEventListener("click", showStory);
mission.addEventListener("click", showMission);
vision.addEventListener("click", showVision);

function showStory() {
  story.classList.add("active");
  storyParagraph.classList.add("active");

  mission.classList.remove("active");
  missionParagraph.classList.remove("active");

  vision.classList.remove("active");
  visionParagraph.classList.remove("active");
}

function showMission() {
  mission.classList.add("active");
  missionParagraph.classList.add("active");

  story.classList.remove("active");
  storyParagraph.classList.remove("active");

  vision.classList.remove("active");
  visionParagraph.classList.remove("active");
}

function showVision() {
  vision.classList.add("active");
  visionParagraph.classList.add("active");

  story.classList.remove("active");
  storyParagraph.classList.remove("active");

  mission.classList.remove("active");
  missionParagraph.classList.remove("active");
}
