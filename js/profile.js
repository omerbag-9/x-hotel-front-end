// get and add profile
let profileList = [];

async function addProfile() {
    let myReq = await fetch(`http://127.0.0.1:8000/api/api/reviews/`)
    console.log(myReq)
    let Data = await myReq.json()
    profileList = Data.reviews
    console.log(profileList)
    displayProfile()
    }

    addProfile()

    function displayProfile(){
        let temp = ""
        profileList.forEach((element)=>{
            temp+=` <p class="fw-bold">User Name : <span class="fw-normal">${element.username}</span></p>
            <p class="fw-bold">Email : <span class="fw-normal">${element.email}</span></p>
            <p class="fw-bold">Booked : <span class="fw-normal">${element.bookings}</span></p>`
        })
        document.getElementById("myProfile").innerHTML = temp
    }