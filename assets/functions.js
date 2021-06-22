export function showMovie(data, container, parentContainer) {
    container.setAttribute("class", "list");
    parentContainer.appendChild(container);
}

export function addMovieName(data, container) {
    const movieTitle = document.createElement("p");
    movieTitle.innerText = data;
    container.appendChild(movieTitle);
}

export function addMovieToggle(container, parentContainer) {
    const movieToggle = document.createElement("input");
    const label = document.createElement("label");
    label.setAttribute("for", "input")
    movieToggle.type = "checkbox";
    label.textContent = "Have I watched?";
    container.appendChild(label)
    container.appendChild(movieToggle);

    movieToggle.onclick = () => {
        parentContainer.appendChild(container);
        const rating = document.createElement('input');
        const ratingText = document.createElement('p')
        rating.type = "range";
        rating.min = "1";
        rating.max = "100";

        rating.oninput = function () {
            ratingText.innerHTML = "Rating: " + this.value;
            // localStorage.setItem('rating', JSON.stringify(this.value))
           
        }


        container.appendChild(ratingText)
        container.appendChild(rating);

        movieToggle.remove();
        label.remove();
        container.removeChild(container.children[1])

    }
}

export function addDeleteButton(data, container, parentContainer) {
    const movieDelete = document.createElement("button");
    movieDelete.textContent = "Remove";
    container.appendChild(movieDelete);

    movieDelete.onclick = () => {
        parentContainer.removeChild(container);
        localStorage.removeItem(data)

    }
}

export function resetInput() {
    title.value = "";
}