// https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const content = document.getElementById("content");

const getJoke = () => {
  fetch("https://api.blablaguees.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    })
    .catch((error) => alert("impossible d'ccéder à la base de données"));
};
getJoke();

document.body.addEventListener("click", () => getJoke());
