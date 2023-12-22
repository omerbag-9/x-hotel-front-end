
// var checkinyear = document.getElementById("year")
// var checkinmonth = document.getElementById("month")
// var checkinday = document.getElementById("day")
// var checkoutyear = document.getElementById("year1")
// var checkoutmonth = document.getElementById("month1")
// var checkoutday = document.getElementById("day1")
// var adult = document.getElementById("adult")
// var kid = document.getElementById("kids")
// var id = document.getElementById("room1").name ;

// async function book() {
//     var userSendBook = {
//         check_in_date: checkinyear.value+'-'+checkinmonth.value+'-'+checkinday.value,
//         check_out_date: checkoutyear.value+'-'+checkoutmonth.value+'-'+checkoutday.value,
//         adult:adult.value,
//         kids:kid.value,
//         room:id,
//     }
//     var data = await fetch(`http://127.0.0.1:8000/api/booking/`, {
//         method: "post",
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userSendBook)
//     })
//     let res = await data.json()
//     console.log(res);
// }




document.addEventListener('DOMContentLoaded', function () {
  // Your existing code here

  var checkindate = document.querySelector(".checkindate");
  var checkoutdate = document.querySelector(".checkoutdate");
  var adults = document.querySelector(".adult");
  var kid = document.querySelector(".kids");
  var namebooking = document.querySelector(".bookingName");
  var room = document.querySelector(".roomnum");

  async function book() {
      try {
          var userSendBook = {
              name: namebooking.value,
              adults: adults.value,
              kids: kid.value,
              room: room.value,
              check_in_date: checkindate.value,
              check_out_date: checkoutdate.value
          };
          var data = await fetch(`http://127.0.0.1:8000/api/booking/`, {
              method: "post",
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(userSendBook),
          });

          if (!data.ok) {
              throw new Error(`HTTP error! Status: ${data.status}`);
          }

          let res = await data.json();
          console.log(res);
          // Handle the success response here if needed

      } catch (error) {
          console.error('Error during booking:', error);
          // You can handle different types of errors here
          if (error instanceof TypeError) {
              // Handle specific error types if needed
          } else {
              // Handle other errors
          }

          // Display an error message to the user or perform other error handling actions
      }
  }

  // Optionally, you can call the `book` function here or bind it to a button click, etc.
  // For example:
  document.getElementById('book').addEventListener('click', book);
});













//////////////////////////////////////////////////
let roomListHilton = [];

async function addRoomHilton() {
    let myReq = await fetch(`http://127.0.0.1:8000/api/all-rooms/`)
    console.log(myReq)
    let Data = await myReq.json()
    roomListHilton = Data.rooms
    console.log(roomListHilton)
    displayRoomHilton()
    }

    addRoomHilton()

    function displayRoomHilton(){

        let temp = ""
        roomListHilton.forEach((element)=>{
          if(element.hotel == 'Hilton'){
            temp+=`<div class="booking-item">
            <img src="./css/images/Rectangle 26.png" alt="hotel room sweet" />
            <h2>${element.room_name}</h2>
            <span class="me-4 ">room type: ${element.room_type}</span>
            <span>price: ${element.room_price}$</span>
            <div class="booking-line"></div>
            <ul>
              <li><i class="fa-solid fa-tv"></i></li>
              <li><i class="fa-solid fa-shower"></i></li>
              <li><i class="fa-solid fa-wifi"></i></li>
              <li><!-- Button trigger modal -->
                <button type="button" class="btn-booking" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Book Now
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Choose Date</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form action="" >
                      <div class="modal-body">
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                        <div class="name">
                              <label for="">name : </label>
                              <input id="bookingName" type="text">
                            </div>
                        <div class="checkin">
                          <span>checkin : &nbsp;</span>
                          <input type="date" name="checkindate" class="checkindate">
                        </div>
                        <div class="checkout">
                          <span>checkout : &nbsp;</span>
                          <input type="date" name="checkoutdate" class="checkoutdate">
                        </div>
                        <select class="roomnum opacity-0 ">
                          <option value="${element.room_id}" selected>${element.room_id}</option>
                          </select> 
                        <div class=""></div>
                        <div class="persons">
                          <span>persons: </span>
                          <label for="">Adults: </label>
                          <select name="adult" class="adult" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <label for="">Kids: </label>
                          <select name="kids" class="kids" required>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
          
                        </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button id="book" type="button" class="btn btn-primary">Reserve</button>
                        </div>
                      </form>
                      </div>
                    </div>
                  </div>
                </li>
            </ul>
          </div>`
        }})
        document.getElementById("myRoom").innerHTML = temp
    }




function bookcant(){
  window.alert("sign in to book")
}














