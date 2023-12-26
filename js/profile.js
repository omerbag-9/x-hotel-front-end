// get and add profile
let profileList = [];
async function addProfile() {
  try {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/profile/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json",
      },
    });

    if (!myReq.ok) {
      throw new Error(`HTTP error! Status: ${myReq.status}`);
    }

    let data = await myReq.json();
    profileList = data.profile;
    displayProfile();
  } catch (error) {
    console.error("Error:", error);
  }
}

addProfile();

function displayProfile() {
  let temp = "";
  profileList.forEach((element) => {
    temp = `<p class="fw-bold">User Name : <span class="fw-normal">${element.username}</span></p>
    <p class="fw-bold">Email : <span class="fw-normal">${element.email}</span></p>`;
  });
  document.getElementById("myProfile").innerHTML = temp;
}















// get and add profile
let profileBookedList = [];
async function addBookedProfile() {
  try {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/profile/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json",
      },
    });

    if (!myReq.ok) {
      throw new Error(`HTTP error! Status: ${myReq.status}`);
    }

    let data = await myReq.json();
    profileBookedList = data.bookings;
    displayBookedProfile();
  } catch (error) {
    console.error("Error:", error);
  }
}

addBookedProfile();

function displayBookedProfile() {
  let temp = "";
  profileBookedList.forEach((element) => {
    temp = `<p class="fw-bold">Booked : <span class="fw-normal">FROM: ${element.check_in_date} , </span><span class="fw-normal"> TO: ${element.check_out_date}</span></p>`;
  });
  document.getElementById("myProfile").innerHTML = temp;
}
