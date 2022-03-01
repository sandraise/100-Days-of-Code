//  DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

const showAmPm = true;
//  Show time
function showTime() {
  //   let today = new Date(2019, 06, 10, 23, 33, 30);
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //    Set AM or PM
  const amPM = hour >= 12 ? "PM" : "AM";

  //    12hr format
  hour = hour % 12 || 12;

  //    Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPM : ""}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set background and greeting
function setBgGreet() {
  //   let today = new Date(2019, 06, 10, 23, 33, 30);
  let today = new Date();
  hour = today.getHours();

  if (hour < 12) {
    //   Morning
    document.body.style.backgroundImage = "url('../img/morning.jpeg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good morning";
    document.body.style.color = "white";
  } else if (hour < 18) {
    //   Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpeg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good afternoon";
  } else {
    //   Evening
    document.body.style.backgroundImage = "url('../img/night.jpeg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good evening";
    document.body.style.color = "white";
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();


// const API_KEY = ``; // Fill in with your own key.
// const verse = document.querySelector(`#verse-content`);
// const verseRef = document.querySelector(`#verse`);

// const BIBLE_ID = `75942286a6e6dfd2579c4e1076ba41f6`;
// const VERSES = [
//   `JER.29.11`,
//   `PSA.23`,
//   `1COR.4.4-8`,
//   `PHP.4.13`,
//   `JHN.3.16`,
//   `ROM.8.28`,
//   `ISA.41.10`,
//   `PSA.46.1`,
//   `GAL.5.22-23`,
//   `HEB.11.1`,
//   `2TI.1.7`,
//   `1COR.10.13`,
//   `PRO.22.6`,
//   `ISA.40.31`,
//   `JOS.1.9`,
//   `HEB.12.2`,
//   `MAT.11.28`,
//   `ROM.10.9-10`,
//   `PHP.2.3-4`,
//   `MAT.5.43-44`,
// ];

// const verseIndex = Math.floor(Math.random() * VERSES.length);
// const verseID = VERSES[verseIndex];

// getResults(verseID).then((data) => {
//   const passage = data.passages[0];
//   verseRef.innerHTML = `<span><i>${passage.reference}</i></span>`;
//   verse.innerHTML = `<div class="text eb-container">${passage.content}</div>`;
// });

// function getResults(verseID) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = false;

//     xhr.addEventListener(`readystatechange`, function () {
//       if (this.readyState === this.DONE) {
//         const { data, meta } = JSON.parse(this.responseText);

//         _BAPI.t(meta.fumsId);
//         resolve(data);
//       }
//     });

//     xhr.open(
//       `GET`,
//       `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`
//     );
//     xhr.setRequestHeader(`api-key`, API_KEY);

//     xhr.onerror = () => reject(xhr.statusText);

//     xhr.send();
//   });
// }