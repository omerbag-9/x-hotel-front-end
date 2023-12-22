// dashboard numbers
let dashList = [];

async function addDash() {
    let myReq = await fetch(`http://127.0.0.1:8000/api/DashBoard/`)
    console.log(myReq)
    let Data = await myReq.json()
    dashList = Data.counts
    console.log(dashList)
    displayDash()

    }

    addDash()

    function displayDash(){
        let temp = ""
        dashList.forEach((element)=>{
            temp+=`<div class="dash-item dashback1 bg-info">
            <p class="dash-item-desc fw-bold ms-2 ">booked rooms</p>
            <p class="dash-item-num fw-bold fs-1 ">+${element.user_booked_count}</p>
          </div>
          <div class="dash-item dashback2 bg-info">
            <p class="dash-item-desc fw-bold ms-2 ">hotels</p>
            <p class="dash-item-num fw-bold fs-1 ">+${element.hotel_count}</p>
          </div>
          <div class="dash-item dashback3 bg-info">
            <p class="dash-item-desc fw-bold ms-2 ">reviews</p>
            <p class="dash-item-num fw-bold fs-1 ">+${element.review_count}</p>
          </div>`
        })
        document.getElementById("myDash").innerHTML = temp
    }
