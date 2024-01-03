
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

    //     var list = []
    //     let nodelist = ""
    //     list.forEach((element)=>{
    //     nodelist+=element.checkindate.value
    //     })
    //      listData = nodelist
    // console.log(listData);

var reserveClose = document.querySelector(".reservation button.close")
var reserveShow = document.getElementById("btn-booking")
var reservebook = document.getElementById("btnbook")
var reserveContainer = document.getElementById("reservation")

reserveClose.addEventListener('click',function(){
  reserveContainer.style.visibility = 'hidden'
})
reservebook.addEventListener('click',function(){
  reserveContainer.style.visibility = 'hidden'
})
reserveShow.addEventListener('click',function(){
  reserveContainer.style.visibility = 'visible'
})


var reserveCloseEvent = document.querySelector("#reservationEvent button.close")
var reserveShowEvent = document.getElementById("btn-bookingEvent")
var reservebookEvent = document.getElementById("btnbookEvent")
var reserveContainerEvent = document.getElementById("reservationEvent")

reserveCloseEvent.addEventListener('click',function(){
  reserveContainerEvent.style.visibility = 'hidden'
})
reservebookEvent.addEventListener('click',function(){
  reserveContainerEvent.style.visibility = 'hidden'
})
reserveShowEvent.addEventListener('click',function(){
  reserveContainerEvent.style.visibility = 'visible'
})






    let roomListHilton = [];

    async function addRoomHilton() {
        let myReq = await fetch(`https://xhotel3.onrender.com/api/all-rooms/`)
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
                temp+=`<div class="booking-item" id="room" name="1">
                      <img src="./css/images/Rectangle 26.png" alt="hotel room sweet" />
                      <h2>${element.room_name}</h2>
                      <span class="me-4 ">${element.room_type}</span>
                      <span class="me-4 ">${element.room_price}$</span>
                      <span>room id : ${element.room_id}</span>
                      <div class="booking-line"></div>
                      <ul>
                        <li><i class="fa-solid fa-tv"></i></li>
                        <li><i class="fa-solid fa-shower"></i></li>
                        <li><i class="fa-solid fa-wifi"></i></li>
                      </ul>
                    </div> 
                    <!-- ./booking-item-->`
            }})
            document.getElementById("myRoom").innerHTML = temp
        }









//////////////////////////////////////////////////




    var checkindate = document.getElementById("checkindate")
    var checkoutdate = document.getElementById("checkoutdate")
    var adults = document.getElementById("adult");
    var kid = document.getElementById("kids");
    var namebooking = document.getElementById("bookingName")
    var room = document.getElementById("room_id")
    


      async function book() {

        var userSendBook = {
        name:namebooking.value,
        adults: adults.value,
        kids: kid.value,
        room:room.value,
        check_in_date: checkindate.value,
        check_out_date: checkoutdate.value,
      };
    
        try {
      
            var data = await fetch(`https://xhotel3.onrender.com/api/booking/`, {
                method: "post",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userSendBook),
            });
    
            if (!data.ok) {
              window.alert("the room is booked in this time")
                throw new Error(`HTTP error! Status: ${data.status}`);
            }
            else{
              window.location.href = `https://xhotel3.onrender.com/make_payment/`;
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

  




    //event
    var checkindateEvent = document.getElementById("checkindateEvent")
    // var namebookingEvent = document.getElementById("bookingNameEvent")
    var eventType = document.getElementById("event_type")
    var event_id = document.getElementById("event_id")
    


      async function bookEvent() {

        var userSendBookEvent = {
        // name:namebookingEvent.value,
        event_type:eventType.value,
        event_id:event_id.value,
        check_in: checkindateEvent.value,
      };
    
        try {
      
            var data = await fetch(`https://xhotel3.onrender.com/api/event/`, {
                method: "post",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userSendBookEvent),
            });
    
            if (!data.ok) {
              window.alert("the event is booked in this time")
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



///////////////////////
// Bind calculatePrice function to input change events
$('#checkindate, #checkoutdate, #adult, #kids').on('change', calculatePrice);

// Function to make an HTTP request to get room data
function fetchRoomData(callback) {
  // Replace with the actual URL of your JSON endpoint
  const apiUrl = 'https://xhotel3.onrender.com/api/all-rooms/';

  jQuery.ajax({
      url: apiUrl,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
          callback(data);
      },
      error: function (error) {
          console.error('Error fetching room data:', error);
      }
  });
}

// Function to calculate the new price on the client side
function calculatePrice() {
  // Get user input values from the form
  const checkInDate = $('#checkindate').val();
  const checkOutDate = $('#checkoutdate').val();
  const numberOfAdults = parseInt($('#adult').val()) || 0; // Default to 0 if not entered
  const numberOfKids = parseInt($('#kids').val()) || 0; // Default to 0 if not entered

  // Check if checkInDate and checkOutDate are entered
  if (!checkInDate || !checkOutDate) {
    console.error('Please enter both check-in and check-out dates');
    return;
  }

  // Retrieve the room ID entered by the user
  const roomId = $('#room_id').val();

  // Fetch room data asynchronously
  fetchRoomData(function (jsonData) {
      // Find the room in the fetched JSON data based on the entered room ID
      const room = findRoomById(jsonData, roomId);

      if (!room) {
          console.error('Room not found with ID:', roomId);
          return;
      }

      // Calculate the number of days between check-in and check-out
      const numberOfDays = calculateNumberOfDays(checkInDate, checkOutDate);

      // Check if numberOfDays is a valid number
      if (isNaN(numberOfDays) || numberOfDays <= 0) {
        console.error('Invalid number of days');
        return;
      }

      // Calculate the new price based on the provided parameters and fetched room price
      const newPrice = room.room_price * numberOfDays * (1 + 0.2 * numberOfAdults + 0.1 * numberOfKids);

      // Display the new price to the user
      $('#price').text(`Total Price: ${newPrice.toFixed(2)}$`);
  });
}

// Function to find a room in the JSON data based on the room ID
function findRoomById(jsonData, roomId) {
  return jsonData.rooms.find(room => room.room_id === parseInt(roomId));
}

// Function to calculate the number of days between two dates
function calculateNumberOfDays(checkInDate, checkOutDate) {
  const startDate = new Date(checkInDate);
  const endDate = new Date(checkOutDate);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    console.error('Invalid date format');
    return NaN;
  }

  const timeDifference = endDate.getTime() - startDate.getTime();
  const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return numberOfDays;
}

function bookcant(){
  window.alert("sign in to book")
}




















