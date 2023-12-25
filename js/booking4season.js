

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









    let roomList4season = [];

    async function addRoom4season() {
        let myReq = await fetch(`http://127.0.0.1:8000/api/all-rooms/`)
        console.log(myReq)
        let Data = await myReq.json()
        roomList4season = Data.rooms
        console.log(roomList4season)
        displayRoom4season()
        }
    
        addRoom4season()
    
        function displayRoom4season(){
    
            let temp = ""
            roomList4season.forEach((element)=>{
              if(element.hotel == '4season'){
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
      
            var data = await fetch(`http://127.0.0.1:8000/api/booking/`, {
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
      
            var data = await fetch(`http://127.0.0.1:8000/api/event/`, {
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