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

// our services

const first_btn = document.getElementById("os-btn1");
const second_btn = document.getElementById("os-btn2");
const third_btn = document.getElementById("os-btn3");
const fourth_btn = document.getElementById("os-btn4");
const os_image = document.getElementById("os-img");

const firstBtnImg = document.getElementById("btn1-img");
const secondBtnImg = document.getElementById("btn2-img");
const thirdBtnImg = document.getElementById("btn3-img");
const fourthBtnImg = document.getElementById("btn4-img");

first_btn.addEventListener("click", showFirstOutput);
second_btn.addEventListener("click", showSecondOutput);
third_btn.addEventListener("click", showThirdOutput);
fourth_btn.addEventListener("click", showFourthOutput);

function showFirstOutput() {
  first_btn.classList.add("os-active-btn");
  firstBtnImg.src = "icons/burger-icon-active.svg";

  secondBtnImg.src = "icons/burger-icon-disabled.svg";
  thirdBtnImg.src = "icons/burger-icon-disabled.svg";
  fourthBtnImg.src = "icons/burger-icon-disabled.svg";

  second_btn.classList.remove("os-active-btn");
  third_btn.classList.remove("os-active-btn");
  fourth_btn.classList.remove("os-active-btn");

  os_image.src = "img/os-main-img.png";
}

function showSecondOutput() {
  second_btn.classList.add("os-active-btn");
  secondBtnImg.src = "icons/burger-icon-active.svg";

  firstBtnImg.src = "icons/burger-icon-disabled.svg";
  thirdBtnImg.src = "icons/burger-icon-disabled.svg";
  fourthBtnImg.src = "icons/burger-icon-disabled.svg";

  first_btn.classList.remove("os-active-btn");
  third_btn.classList.remove("os-active-btn");
  fourth_btn.classList.remove("os-active-btn");

  os_image.src = "img/service-1.jpg";
}

function showThirdOutput() {
  third_btn.classList.add("os-active-btn");
  thirdBtnImg.src = "icons/burger-icon-active.svg";

  firstBtnImg.src = "icons/burger-icon-disabled.svg";
  secondBtnImg.src = "icons/burger-icon-disabled.svg";
  fourthBtnImg.src = "icons/burger-icon-disabled.svg";

  second_btn.classList.remove("os-active-btn");
  first_btn.classList.remove("os-active-btn");
  fourth_btn.classList.remove("os-active-btn");

  os_image.src = "img/service-2.jpg";
}

function showFourthOutput() {
  fourth_btn.classList.add("os-active-btn");
  fourthBtnImg.src = "icons/burger-icon-active.svg";

  firstBtnImg.src = "icons/burger-icon-disabled.svg";
  secondBtnImg.src = "icons/burger-icon-disabled.svg";
  thirdBtnImg.src = "icons/burger-icon-disabled.svg";

  second_btn.classList.remove("os-active-btn");
  third_btn.classList.remove("os-active-btn");
  first_btn.classList.remove("os-active-btn");

  os_image.src = "img/service-3.jpg";
}

// animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// submit btn

function validateForm() {
  var phoneNumber = document.getElementById("mobile").value;
  var mail = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  var first_three = phoneNumber.substr(0, 4);

  if (
    phoneNumber.trim() === "" ||
    first_three !== "+995" ||
    phoneNumber.length !== 13
  ) {
    alert(
      'Please enter a valid phone number. Phone number must start with "+995" and have the length of 13.'
    );
    return false;
  }

  if (mail.trim() === "" || !mail.match(validRegex)) {
    alert("Please enter valid email");
    return false;
  }

  if (subject.trim() === "" || subject.length < 5) {
    alert("Please enter valid subject. Subject must have min 5 characters.");
    return false;
  }

  return true;
}

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (validateForm()) {
      document.getElementById("git-form").submit();
    }
  });

// explore more

var exploreMoreBtn = document.getElementById("explore-more");
var modal = document.getElementById("modal");

var modalCloseBtn = document.getElementById("modal-close-btn");

exploreMoreBtn.addEventListener("click", activeModal);
modalCloseBtn.addEventListener("click", closeModal);

function activeModal() {
  modal.classList.add("active-modal");
  modal.classList.remove("inactive-modal");
}

function closeModal() {
  modal.classList.remove("active-modal");
  modal.classList.add("inactive-modal");
}
