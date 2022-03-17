

const commentsArea = document.querySelector('.comments-pop');
const popOverlay = document.querySelector('.pop-overlay');
const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6IS1WqwHJvP8CAVA1Fp2';


const displayComments = (movieComments) => {
  movieComments.forEach((movieComment) => {
    const commentSection = document.querySelector('.new-comments');
    const commentLi = document.createElement('li');
    commentLi.innerText = `${movieComment.creation_date} ${movieComment.username}: ${movieComment.comment}`;
    commentSection.appendChild(commentLi);
  });
};

const loadComments = async (api) => {
  const id = document.getElementById('item-id').value;
  const writtenComments = await fetch(`${api}/comments?item_id=${id}`).then((res) => res.json())
    .then((result) => result);
  displayComments(writtenComments);
  const commentCounter = writtenComments.length;
  const commentsCount = document.getElementById('comments-count');
  commentsCount.innerHTML = commentCounter;
};

const saveComments = async () => {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;
  const id = document.getElementById('item-id').value;

  await fetch(`${api}/comments`, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${id}`, username: `${username}`, comment: `${message}` }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => loadComments(api));
};
const closeComments = () => {
  commentsArea.classList.add('hide');
  popOverlay.style.display = 'none';
};
const movies = JSON.parse(localStorage.movies);
export const savePop = (commentItem) => {
  const shows = Array.from(document.querySelectorAll('.movie-item'));
  const showItem = commentItem.closest('.movie-item');
  const showIndex = shows.indexOf(showItem);
  const show = movies[showIndex];
  const {
    genres, image, language, name, rating, runtime, id,
  } = show;
  commentsArea.innerHTML = `
    <div class="img-div dn">
    <img src="${image.original}">
    <span class="close-icon"><i class="fa fa-xmark" aria-hidden="true"></i></span>
  </div>
  <h2>${name}</h2>
  <input type="hidden" id="item-id" value="${id}">
  <ul class="specs">
    <li>Language: <span>${language}</span></li>
    <li>Genres: <span>${genres}</span></li>
    <li>Runtime: <span>${runtime}</span></li>
    <li>Rating: <span class="${getColor(rating.average)}">${rating.average}</span></li>
  </ul>
  <div class="show-comments">
    <h3>Comments (<span id="comments-count"></span>)</h3>
    <ul class="new-comments">
    </ul>
  </div>
  <div class="add-comments">
    <h4>Add a Comment</h4>
    <form id="comment-form">
      <input id="username" type="text" placeholder="Your Name">
      <textarea name="" id="message" cols="50" rows="3" placeholder="Your insights"></textarea>
      <button type="submit">Comment</button>
    </form>
  </div>
    `;
  const closeBtn = commentsArea.querySelector('.close-icon');
  closeBtn.addEventListener('click', closeComments);
  const commentForm = document.querySelector('#comment-form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveComments();
  });
};

export function showComments(e) {
  e.preventDefault();
  savePop(e.target);
  commentsArea.classList.remove('hide');
  popOverlay.style.display = 'block';
}

