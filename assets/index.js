import { showMovie, addMovieName, addMovieToggle, addDeleteButton } from "./functions.js";

const title = document.querySelector("#title");
const submit = document.querySelector("#submit");
const moviesContainer = document.querySelector(".movies-container");
const watchedMovies = document.querySelector(".watched-movies");

// consertar o display do nome do filme dentro da função

function listMovies() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const movieDetails = document.createElement("span");
    showMovie(key, movieDetails, moviesContainer);
    addMovieName(key, movieDetails);
    addMovieToggle(movieDetails, watchedMovies);
    addDeleteButton(key, movieDetails, moviesContainer);

  }
}

function addMovie() {
  const movie = {
    nome: title.value,
  };

  const movieDetails = document.createElement("span");
  localStorage.setItem(JSON.stringify(movie.nome), JSON.stringify(movie));
  const storage = JSON.parse(localStorage.getItem(JSON.stringify(movie.nome)));

  showMovie(storage, movieDetails, moviesContainer);
  addMovieName(movie.nome, movieDetails);
  addMovieToggle(movieDetails, watchedMovies);
  addDeleteButton(movie.name, movieDetails, moviesContainer);
}


submit.addEventListener("click", () => {
  addMovie();
  resetInput();
});


window.onload = () => {
  listMovies();
}


