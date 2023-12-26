// dashboard numbers
let dashList = [];

async function addDash() {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/DashBoard/`)
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




    let dashEventList = [];

async function addDashEvent() {
    let myReq = await fetch(`https://xhotel3.onrender.com/api/count-users-attending-event/`)
    console.log(myReq)
    let Data = await myReq.json()
    dashEventList = Data.number_of_users_attending_event
    console.log(dashEventList)
    displayDashEvent()

    }

    addDashEvent()

    function displayDashEvent(){
        let temp = ""
        dashEventList.forEach((element)=>{
            temp+=`<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="${element.attending_data}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-success" style="width: ${element.attending_data}%">${element.attending_data}%</div>
          </div>`
        })
        document.getElementById("myDash").innerHTML = temp
    }
