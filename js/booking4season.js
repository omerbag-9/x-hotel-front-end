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
                          <input type="date" name="checkindate" class="checkoutdate">
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
                          <button onclick="book()" type="button" class="btn btn-primary">Reserve</button>
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

