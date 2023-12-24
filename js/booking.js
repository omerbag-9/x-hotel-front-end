
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
var reserveContainer = document.getElementById("reservation")

reserveClose.addEventListener('click',function(){
  reserveContainer.style.visibility = 'hidden'
})
reserveShow.addEventListener('click',function(){
  reserveContainer.style.visibility = 'visible'
})






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

  

function bookcant(){
  window.alert("sign in to book")
}




















