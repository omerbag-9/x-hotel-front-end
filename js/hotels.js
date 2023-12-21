// get and add hotels
let hotelsList = [];
async function addHotel() {
    let myReq = await fetch(`http://127.0.0.1:8000/api/hotel-details/`)
    let Data = await myReq.json()
    hotelsList = Data.hotels
    console.log(hotelsList)
    displayHotel()
    }

    addHotel()

    function displayHotel(){
        let temp = ""
        hotelsList.forEach((element)=>{
            temp+=`<a href="./bookingSigned.html">
            <div class="hotels-item"  >
              <img src="css/images/Rectangle 20.png" alt="" />
              <div class="item-overlay">
                <h2>${element.name}</h2>
                <span class="d-block">${element.location}</span>
                <span>${element.average_price}$/night</span>
            </div>
            </div>
        </a>`
        })
        document.getElementById("hotelsData").innerHTML = temp
    }
