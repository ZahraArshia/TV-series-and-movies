/* eslint-disable no-confusing-arrow */
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const movieURL = "https://api.tvmaze.com/shows";
const reservationsURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3x4brqQTuutEhv5burqz/comments/";
// id: 3x4brqQTuutEhv5burqz
const popUpBox = document.getElementById("popUpBox");

const postCommentData = async (raw) => {
  const response = await fetch(reservationsURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
    },
    body: JSON.stringify(raw),
  })
    .then((res) => res.text())
    .then((data) =>
      data.error ? { error: true, info: data } : { error: false, info: data }
    )
    .catch((error) => ({ error: true, info: error }));
  return response;
};

const getCommentsData = async (movieId) => {
  const response = await fetch(`${reservationsURL}?item_id=${movieId}`).catch(
    (err) => err
  );
  return response.json();
};

const commentsDisplay = (movieId) => {
  popUpBox.querySelector(".reservationTable").innerHTML = "";
  getCommentsData(movieId).then((data) => {
    if (!data.error) {
      data.forEach((comment) => {
        popUpBox.querySelector(
          ".reservationTable"
        ).innerHTML += `<p>${comment.creation_date} | ${comment.username} : ${comment.comment}</p>`;
      });
    } else {
      popUpBox.querySelector(".reservationTable").innerHTML = "no comment yet!";
    }
  });
};

const getMovieData = async (movieID) => {
  const response = await fetch(`${movieURL}/${movieID}`, {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return response;
};

const counter = async (movieID) => {
  const response = await getCommentsData(movieID)
    .then((result) => (!result.error ? result.length : 0))
    .catch(() => 0);
  return response;
};

const commentsCount = (movieID) => {
  counter(movieID).then((count) => {
    popUpBox.querySelector(".reservationCounter").innerHTML = count;
  });
};

const CommentCounter = (data) =>
  typeof data === "object" ? data.length : "invalid";

const Commentspopup = (movieID) => {
  getMovieData(movieID).then((result) => {
    popUpBox.innerHTML = `
    <span class="closeReservation"><img src="https://img.icons8.com/doodle/48/000000/delete-sign.png"/></span>
    <div class="reservation-skeleton">
    <div class="reservation-film-info">
    <h2 class="popupTitle">${result.name}</h2>
    <img src="${result.image.medium}" class="reservationImg">
    <div >
    <ul id="moreDetails"></ul>
    </div>
    <button class="moreDetailsButton btn" type="submit">More details</button>
    </div>
    <div class="reservation-info">
    <h3 class="reservationsTitle">Comments(<span class="reservationCounter">0</span>)</h3>
    <div class="reservationTable"></div>
    <form class="reservationForm">
      <h3>Add a comment</h3>
      <input id="username" type="text" name="username" placeholder="Your name" required>
      <br>
      <textarea id="commentArea" placeholder="Your comment" name="commentArea" required minlength="1"></textarea>
      <br>
      <button class="reservationSubmit" type="submit">Submit</button>
    </form>
    </div>
    </div>
    `;
    commentsCount(movieID);
    popUpBox.style.display = "flex";
    document.body.style.overflow = "hidden";
    document
      .querySelector(".closeReservation")
      .addEventListener("click", () => {
        popUpBox.style.display = "none";
        document.body.style.overflow = "visible";
        popUpBox.innerHTML = "";
      });
    commentsDisplay(movieID);
    const moreDetails = popUpBox.querySelector("#moreDetails");
    const moreDetailsButton = popUpBox.querySelector(".moreDetailsButton");
    moreDetailsButton.addEventListener("click", () => {
      moreDetailsButton.style.display = "none";
      moreDetails.innerHTML = ` <li>Premiered: ${result.premiered}</li>
      <li>Ended: ${result.ended}</li>
      <li>Language: ${result.language}</li>
      <li>Type: ${result.type}</li>`;
    });
    const form = popUpBox.querySelector(".reservationForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const user = form.elements.username.value;
      const commentArea = form.elements.commentArea.value;
      postCommentData({
        item_id: movieID,
        username: user,
        comment: commentArea,
      }).then(() => {
        commentsDisplay(movieID);
        commentsCount(movieID);
        form.reset();
      });
    });
  });
};

export { Commentspopup, CommentCounter };
