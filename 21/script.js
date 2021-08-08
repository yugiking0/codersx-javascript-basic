var users = [
  { name: "Tom", gender: "male" },
  { name: "Maria", gender: "female" },
  { name: "Jason", gender: "male" },
  { name: "Sarah", gender: "female" },
  { name: "Tèo", gender: "male" },
  { name: "Loan", gender: "female" },
  { name: "Hùng", gender: "male" },
  { name: "Hương", gender: "female" },
];

// Declare
const userList = document.querySelector(".list-group");
const genderFilter = document.querySelector("#gender-filter");

userList.innerHTML = render2(users, "null");

genderFilter.addEventListener("change", function () {
  userList.innerHTML = render(users, genderFilter.value);
});

function render(Items, gender) {
  return Items.filter(function (item) {
    return item.gender === gender || gender === "null";
  })
    .map((item) => item.name)
    .reduce(function (acc, cur) {
      return (acc += `<li ">${cur}</li>`);
    }, "");
}

function render2(Items, gender) {
  var newList = Items.filter(function (item) {
    return item.gender === gender || gender === "null";
  })
    .map((item) => `<li ">${item.name}</li>`)
    .join("");
  return newList;
}
