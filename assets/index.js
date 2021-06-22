const title = document.querySelector("#title");
const submit = document.querySelector("#submit");
const moviesContainer = document.querySelector(".movies-container");
const watchedMovies = document.querySelector(".watched-movies");

// consertar o display do nome do filme dentro da função

function listMovies(section) {
  for (i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const movieDetails = document.createElement("span");
    showMovie(key, movieDetails)

    // const movieDetails = document.createElement("span");
    // movieDetails.setAttribute("class", "list");
    // section.appendChild(movieDetails);

    // const movieTitle = document.createElement("p");
    // movieTitle.innerText = key;
    // movieDetails.appendChild(movieTitle);

    // const movieToggle = document.createElement("input");
    // movieToggle.type = "checkbox";
    // movieDetails.appendChild(movieToggle);


    // const movieDelete = document.createElement("button");
    // movieDelete.textContent = "Remove";
    // movieDetails.appendChild(movieDelete);

    // movieDelete.onclick = () => {
    //   removeMovie(moviesContainer, movieDetails);
    //   localStorage.removeItem(key)

    // }

    // movieToggle.onclick = () => {
    //   watchedMovies.appendChild(movieDetails);
    //   movieDelete.textContent = "Delete";

    //   movieDelete.onclick = () => {
    //     removeMovie(watchedMovies, movieDetails);
    //     localStorage.removeItem(key);
    //   }
    // }
  }
}

function addMovie() {
  const movie = {
    nome: title.value,
  };

  const movieDetails = document.createElement("span");

  localStorage.setItem(JSON.stringify(movie.nome), JSON.stringify(movie));

  const storage = JSON.parse(localStorage.getItem(JSON.stringify(movie.nome)));

  showMovie(storage, movieDetails);
}

function showMovie(data, container) {
  container.setAttribute("class", "list");
  moviesContainer.appendChild(container);

  const movieTitle = document.createElement("p");
  movieTitle.innerText = data.nome;
  container.appendChild(movieTitle);

  const movieToggle = document.createElement("input");
  movieToggle.type = "checkbox";
  container.appendChild(movieToggle);


  const movieDelete = document.createElement("button");
  movieDelete.textContent = "Remove";
  container.appendChild(movieDelete);

  movieDelete.onclick = () => {
    removeMovie(moviesContainer, container);
    localStorage.removeItem(data)
  };

  movieToggle.onclick = () => {
    watchedMovies.appendChild(container);
    movieDelete.textContent = "Delete";
    
    movieDelete.onclick = () => {
      removeMovie(watchedMovies, container);
      localStorage.removeItem(data)
    }
  }
}

function removeMovie(parent, container) {
  parent.removeChild(container);
  // mudar essa função para remover o elemento do localStorage
}

function resetInput() {
  title.value = "";
}

submit.addEventListener("click", () => {
  addMovie();
  resetInput();
});


window.onload = () => {
  listMovies(moviesContainer);
}


