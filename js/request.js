// api
const API = "https://randomuser.me/api/?results=20";

// for leader
const overlay = document.getElementById("overlay");

const loader = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", resource);
    request.send();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        loader(true);
      } else if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data.results);
        loader(false);
      } else if (request.readyState === 4) {
        reject("Something went wrong");
        loader(false);
      }
    });
  });
};

const reload = () => {
  getData(API)
    .then((data) => updateUi(data))
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", reload);
