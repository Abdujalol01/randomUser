const form = document.querySelector("#form");
const formButton = document.querySelector(".form__button");
const user = document.querySelector("#user");
const deleteBtn = document.querySelector("#delete__btn");
const clearBtn = document.querySelector("#clear__button");
const formInput = document.querySelector("#form__input");

formInput.addEventListener("input", () => {
  const inputValue = formInput.value.toLowerCase();
  const userName = document.querySelectorAll(".user__name");
  userName.forEach((item) => {
    if (item.lastElementChild.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  reload();
  clearBtn.classList.remove("hidden");
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});
const updateUi = (data) => {
  user.innerHTML = "";
  data.forEach((item) => {
    const { name, dob, picture, gender, location } = item;
    user.innerHTML += `
    <li class="user__item">
    <button id="delete__btn" class="user__delete--btn">
      <i class="fas fa-trash"></i>
    </button>
    <img
      class="user__img"
      alt="User photo"
      src=${picture.medium} ${picture.large} ${picture.thumbnail}
      width="100"
      height="100"
    />
    <div class="user__name">
      <span class="material-symbols-outlined">badge</span>
      <span>- ${name.first}  ${name.last} ${name.title}</span>
    </div>
    <div class="user__year">
      <span class="material-symbols-outlined">cake</span>
      <span>- ${dob.age}</span>
    </div>
    <div class="user__location">
      <span class="material-symbols-outlined">person_pin_circle</span>
      <span>- ${location.city} ${location.country}</span>
    </div>
    <div class="user__gender">
      <span class="material-symbols-outlined">man</span>
      <span>- ${gender}</span>
    </div>
  </li>`;
  });
};

document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "user__delete--btn") {
    e.target.parentElement.remove();
  }
});
