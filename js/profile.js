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

{/* <p class="fw-bold">booking details:</p>
<p class="fw-bold">checkin : <span class="fw-normal">${element.checkin}</span></p>
<p class="fw-bold">checkout : <span class="fw-normal">${element.checkout}</span></p>
<p class="fw-bold">roomType : <span class="fw-normal">${element.room_type}</span></p> */}













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






// get and add profile
let profilebookingList = [];
async function addBookingProfile() {
  try {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/profilebooking/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json",
      },
    });

    if (!myReq.ok) {
      throw new Error(`HTTP error! Status: ${myReq.status}`);
    }

    let data = await myReq.json();
    profilebookingList = data.booking_info;
    displayBookingProfile();
  } catch (error) {
    console.error("Error:", error);
  }
}

addBookingProfile();

function displayBookingProfile() {
  let temp1 = "";
  profilebookingList.forEach((element) => {
    temp1 = `<span>check in date: </span><span>${element.check_in_date}</span>
    <span>check in date: </span><span>${element.check_out_date}</span>
    <span>booked room price: </span><span>${element.total_price}</span>`;
  });
  document.getElementById("myProfilebookings").innerHTML = temp1;
}