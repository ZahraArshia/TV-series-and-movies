import "./style.css";
import { getMovies, countMovies } from "./modules/get-api.js";
import { getLikes, addLike } from "./modules/interact.js";
import { Reservationspopup } from "./modules/reservation.js";
import { Commentspopup } from "./modules/comment.js";

const displayMovie = (movie, like = {}) => `<div class="card">
                    <div class="card-div">
                        <img class="card-img" src="${movie.image.medium}">
                    </div>
                    <div class="description">
                        <h3 class="title"> ${movie.name} </h3>
                        <p class="likes"> <i class="fas fa-heart like" data-id="${movie.id}"> <span class="num"> ${like} </span> </i></p>
                    </div>
                    <button class="commentBtn btn" data-id="${movie.id}"> comments </button>
                    <button class="reservation btn" data-id="${movie.id}"> reservations </button>
   </div>`;

const listMovie = document.querySelector(".movies");
const moviesComponent = async () => {
  const likes = await getLikes();
  listMovie.innerHTML = "";
  const list = await getMovies();
  countMovies(list);
  list.forEach((item) => {
    let count = 0;
    const num = likes.find((like) => item.id === Number(like.item_id));
    if (num !== undefined) {
      count = num.likes;
    } else {
      count = 0;
    }
    listMovie.innerHTML += displayMovie(item, count);
  });

  const like = document.querySelectorAll(".like");
  like.forEach((item) => {
    item.addEventListener("click", () => {
      const movieId = item.getAttribute("data-id");
      if (item.style.color !== "pink") {
        item.style.color = "pink";
        item.firstElementChild.innerHTML =
          Number(item.firstElementChild.innerHTML) + 1;
        addLike(movieId);
      }
    });
  });

  const reservationButtons = document.querySelectorAll(".reservation");
  reservationButtons.forEach((item) => {
    item.addEventListener("click", () => {
      const movieId = item.getAttribute("data-id");
      Reservationspopup(movieId);
    });
  });

  const CommentButtons = document.querySelectorAll(".commentBtn");

  CommentButtons.forEach((item) => {
    item.addEventListener("click", () => {
      const movieId = item.getAttribute("data-id");
      Commentspopup(movieId);
    });
  });
};

moviesComponent();
