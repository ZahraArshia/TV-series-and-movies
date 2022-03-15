// reservationButtons.setAttribute('movieID', raw.item_id);
const movieURL = 'https://api.tvmaze.com/shows';
const reservationsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3x4brqQTuutEhv5burqz/reservations/';
// id: 3x4brqQTuutEhv5burqz
const reservationButtons = document.querySelector('.reservation');
const popUpBox = document.getElementById('popUpBox');

const postReservationsData = async (raw) => {
  await fetch(reservationsURL, {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset= UTF-8',
    },
    body: raw,
    redirect: 'follow',
  })
  // .then((response) => response.text())
  // .then((result) => (result.error
  //   ? { error: true, info: result }
  //   : { error: false, info: result }))
  // .catch((error) => ({ error: true, info: error }))
  ;
};

const getReservationsData = async (itemID) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3x4brqQTuutEhv5burqz/reservations/?item_id=${itemID}`, {
    method: 'GET',
    redirect: 'follow',
  })
  // .then((response) => response.json())
  // .then((result) => result)
  // .catch((error) => error);
  ;
  const reservationsList = await response.json();
  return reservationsList;
};

const reservationDisplay = (movieID) => {
  getReservationsData(movieID).then((data) => {
    if (!data.error) {
      data.forEach((reserve) => {
        popUpBox.querySelector('.reservationTable').innerHTML += `<li class="reserv-li"> ${reserve.date_start} - ${reserve.date_end} by ${reserve.username} </li>`;
      });
    } else {
      popUpBox.querySelector('.reservationTable').innerHTML ='There is no reservation yet for this movie!';
    }
  });
};

const getMovieData = async (movieID) => {
  const response = await fetch(`${movieURL}/${movieID}`, {
    method: 'GET',
    redirect: 'follow',
  });
  return response.json();
};

const Reservationspopup = (movieID) => {
  // const popup = document.createElement('div');
  // popup.classList.add('modal');
  popUpBox.innerHTML = `loading...<br>
  <span class="closeReservation">X</span>`;
  getMovieData(movieID).then((result) => {
    popUpBox.innerHTML = `<span class="closeReservation">X</span>
    <h2 class="popupTitle">${result.name}</h2>
    <img src="${result.image.medium}" class="popupIMG">
    <h3 class="reservationsTitle">Comments (<span class="reservationCounter">0</span>)</h3>
    <ul class="reservationTable"></ul>
    <form class="reservationForm">
      <h3>Add a reservation</h3>
      <input type="text" name="name" placeholder="Your name" required>
      <input type="date" name="StartDate" placeholder="Start date" required>
      <input type="date" name="EndDate" placeholder="End date" required>
      <button class="reservationSubmit" type="submit">Submit</button>
    </form>
    `;
    reservationDisplay(movieID);
    const form = popUpBox.querySelector('.reservationForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const raw = JSON.stringify({
        item_id: movieID,
        username: form.elements.username.value,
        date_start: form.elements.StartDate.value,
        date_end: form.elements.EndDate.value,
      });
      postReservationsData(raw);
      form.reset();
    });
    popUpBox.style.display = 'flex';
  });
};

const reservationEnable = () => {
  reservationButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const movieID = btn.getAttribute('movieID');
      Reservationspopup(movieID);
      // document.body.style.overflow = 'hidden';
    });
  });
};

export default reservationEnable;