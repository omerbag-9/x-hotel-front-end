
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






var checkinyear = document.getElementsByClassName("year");
var checkinmonth = document.getElementsByClassName("month");
var checkinday = document.getElementsByClassName("day");
var checkoutyear = document.getElementsByClassName("year1");
var checkoutmonth = document.getElementsByClassName("month1");
var checkoutday = document.getElementsByClassName("day1");
var adults = document.getElementsByClassName("adult");
var kid = document.getElementsByClassName("kids");
var namebooking = document.getElementsByClassName("bookingName")
var room = document.getElementById("room_id");



async function book() {
    try {
        var userSendBook = {
            check_in_date: checkinyear.value + '-' + checkinmonth.value + '-' + checkinday.value,
            check_out_date: checkoutyear.value + '-' + checkoutmonth.value + '-' + checkoutday.value,
            adults: adults.value,
            kids: kid.value,
            name:namebooking.value,
            room:room
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













//////////////////////////////////////////////////
let roomList = [];

async function addRoom() {
    let myReq = await fetch(`http://127.0.0.1:8000/api/all-rooms/`)
    console.log(myReq)
    let Data = await myReq.json()
    roomList = Data.rooms
    console.log(roomList)
    displayRoom()
    }

    addRoom()

    function displayRoom(){
        let temp = ""
        roomList.forEach((element)=>{
            temp+=` <div class="booking-item" id="${element.room_id}" name="${element.room_id}">
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
                          <select class="year" required>
                            <option value="year" disabled selected>year</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                          </select>
                        <select class="month" required>
                          <option value="month" selected disabled>month</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                        <select class="day" required>
                          <option value="day" selected disabled>day</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                         
                        </select>
                        </div>
                        <div class="checkout my-4 ">
                          <span>checkout : </span>
                          <select class="year1" required>
                            <option value="year" selected disabled>year</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                          </select>
                        <select class="month1"  required>
                          <option value="month" selected disabled>month</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                        <select class="day1" required>
                          <option value="day" selected disabled>day</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                       
                  
                        
                        </div>
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
                          <button onclick="book()" type="button" class="btn btn-primary">Reserve</button>
                        </div>
                      </form>
                      </div>
                    </div>
                  </div>
                </li>
            </ul>
          </div>`
        })
        document.getElementById("myRoom").innerHTML = temp
    }




function bookcant(){
  window.alert("sign in to book")
}














