$(document).ready(function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let qntYears = 4;
    let selectYear = $("#year");
    let selectMonth = $("#month");
    let selectDay = $("#day");
    let currentYear = new Date().getFullYear();
  
    for (var y = 0; y < qntYears; y++) {
      let date = new Date(currentYear);
      let yearElem = document.createElement("option");
      yearElem.value = currentYear
      yearElem.textContent = currentYear;
      selectYear.append(yearElem);
      currentYear++;
    }
  
    for (var m = 0; m < 12; m++) {
      let month = monthNames[m];
      let monthElem = document.createElement("option");
      monthElem.value = m;
      monthElem.textContent = month;
      selectMonth.append(monthElem);
    }
  
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();
  
    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);
  
    AdjustDays();
    selectDay.val(day)
  
    function AdjustDays() {
      var year = selectYear.val();
      var month = parseInt(selectMonth.val()) + 1;
      selectDay.empty();
  
      //get the last day, so the number of days in that month
      var days = new Date(year, month, 0).getDate();
  
      //lets create the days of that month
      for (var d = 1; d <= days; d++) {
        var dayElem = document.createElement("option");
        dayElem.value = d;
        dayElem.textContent = d;
        selectDay.append(dayElem);
      }
    }
  });





/////////////////////////////////////////////
  $(document).ready(function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let qntYears = 4;
    let selectYear = $("#year1");
    let selectMonth = $("#month1");
    let selectDay = $("#day1");
    let currentYear = new Date().getFullYear();
  
    for (var y = 0; y < qntYears; y++) {
      let date = new Date(currentYear);
      let yearElem = document.createElement("option");
      yearElem.value = currentYear
      yearElem.textContent = currentYear;
      selectYear.append(yearElem);
      currentYear++;
    }
  
    for (var m = 0; m < 12; m++) {
      let month = monthNames[m];
      let monthElem = document.createElement("option");
      monthElem.value = m;
      monthElem.textContent = month;
      selectMonth.append(monthElem);
    }
  
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();
  
    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);
  
    AdjustDays();
    selectDay.val(day)
  
    function AdjustDays() {
      var year = selectYear.val();
      var month = parseInt(selectMonth.val()) + 1;
      selectDay.empty();
  
      //get the last day, so the number of days in that month
      var days = new Date(year, month, 0).getDate();
  
      //lets create the days of that month
      for (var d = 1; d <= days; d++) {
        var dayElem = document.createElement("option");
        dayElem.value = d;
        dayElem.textContent = d;
        selectDay.append(dayElem);
      }
    }
  });
////////////////////////////////////////////////////////////////



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






var checkinyear = document.getElementById("year");
var checkinmonth = document.getElementById("month");
var checkinday = document.getElementById("day");
var checkoutyear = document.getElementById("year1");
var checkoutmonth = document.getElementById("month1");
var checkoutday = document.getElementById("day1");
var adult = document.getElementById("adult");
var kid = document.getElementById("kids");
var name = document.getElementById("bookingName")
var id = document.getElementById("room1").name;

async function book() {
    try {
        var userSendBook = {
            check_in_date: checkinyear.value + '-' + checkinmonth.value + '-' + checkinday.value,
            check_out_date: checkoutyear.value + '-' + checkoutmonth.value + '-' + checkoutday.value,
            adult: adult.value,
            kids: kid.value,
            name:name.value,
            room: id,
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
        window.alert("this room is already booked in this time")
        // You can handle different types of errors here
        if (error instanceof TypeError) {
            // Handle specific error types if needed
        } else {
            // Handle other errors
        }

        // Display an error message to the user or perform other error handling actions
    }
}






let roomList = [];

async function addRoom() {
    let myReq = await fetch(`http://127.0.0.1:8000/api/api/reviews/`)
    console.log(myReq)
    let Data = await myReq.json()
    roomList = Data.rooms
    console.log(roomList)
    displayReview()
    }

    addRoom()

    function displayReview(){
        let temp = ""
        roomList.forEach((element)=>{
            temp+=`   <div class="booking-item" id="room" name="${room_id}">
            <img src="./css/images/Rectangle 26.png" alt="hotel room sweet" />
            <h2>${room_name}</h2>
            <span class="me-4 ">${room_type}</span>
            <span>${room_price}</span>
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
                          <select id="year" required></select>
                        <select id="month" required></select>
                        <select id="day" required></select>
                        </div>
                        <div class="checkout my-4 ">
                          <span>checkout : </span>
                          <select id="year1" required></select>
                        <select id="month1" required></select>
                        <select id="day1" required></select>
                        </div>
                        <div class="persons">
                          <span>persons: </span>
                          <label for="">Adults: </label>
                          <select name="adult" id="adult" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <label for="">Kids: </label>
                          <select name="kids" id="kids" required>
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