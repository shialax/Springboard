const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

let highlightedIndex = -1;

function search(str) {
  let results = [];

  const lowerStr = str.toLowerCase();

  for (const fruitName of fruit) {
    if (fruitName.toLowerCase().includes(lowerStr)) {
      results.push(fruitName);
    }
  }

  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  if (inputVal) {
    const results = search(inputVal);
    showSuggestions(results);
  } else {
    suggestions.innerHTML = " ";
  }
}

function showSuggestions(results) {
  suggestions.innerHTML = "";
  highlightedIndex = -1;
  if (results.length > 0) {
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      li.dataset.value = result;

      li.addEventListener("mouseover", () => highlightSuggestion(index));
      li.addEventListener("mouseout", () => unhighlightSuggestion(index));

      suggestions.appendChild(li);
    });
  }
}

function highlightSuggestion(index) {
  const items = suggestions.querySelectorAll("li");
  if (highlightedIndex > -1) {
    items[highlightedIndex].classList.remove("highlight");
  }
  highlightedIndex = index;
  items[index].classList.add("highlight");
}

function unhighlightSuggestion(index) {
  const items = suggestions.querySelectorAll("li");
  items[index].classList.remove("highlight");
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.dataset.value;
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
