const menus = [];
let page = 0;
const h1 = document.querySelector("#Menu1");
const nextBtn = document.querySelector("#nextMenu");
const preBtn = document.querySelector("#previousMenu");
const Item1 = document.querySelector("div.panel1 h1");
const P1 = document.querySelector("div.panel1 p");
const Item2 = document.querySelector("div.panel2 h1");
const P2 = document.querySelector("div.panel2 p");
const Item3 = document.querySelector("div.panel3 h1");
const P3 = document.querySelector("div.panel3 p");
const Item4 = document.querySelector("div.panel4 h1");
const P4 = document.querySelector("div.panel4 p");

// https://gist.githubusercontent.com/avcoder/0de79329fdfec90a62e968a43865fc04/raw/4de44757059396a0fb66789b8223ae33a1109fa8/menu.json

async function getMenus() {
  const res = await fetch(
    "https://gist.githubusercontent.com/avcoder/0de79329fdfec90a62e968a43865fc04/raw/4de44757059396a0fb66789b8223ae33a1109fa8/menu.json"
  );
  const data = await res.json();
  menus.push(...data);
  display();
}

function display() {
  h1.textContent = menus[page].title;
  Item1.textContent = menus[page].soup;
  P1.textContent = menus[page].soupPrice;
  Item2.textContent = menus[page].salad;
  P2.textContent = menus[page].saladPrice;
  Item3.textContent = menus[page].lighterFare;
  P3.textContent = menus[page].lighterFarePrice;
  Item4.textContent = menus[page].entree;
  P4.textContent = menus[page].entreePrice;
}

// h1.addEventListener("click", next);

getMenus();

function next() {
  // if the page variable reaches the last element in our array, reset it
  if (page === menus.length - 1) {
    page = 0;
  } else {
    page += 1;
  }
  display();
}
function previous() {
  // if the page variable reaches the last element in our array, reset it
  if (page === 0) {
    page = 5;
  } else {
    page -= 1;
  }
  display();
}

// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements

// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above

// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable

// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale

// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.

// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.
nextBtn.addEventListener("click", next);
preBtn.addEventListener("click", previous);
// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.
