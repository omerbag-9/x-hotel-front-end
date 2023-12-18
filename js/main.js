// // first room checkin and checkout
// var datesForDisable  = ["2023-12-6", "2023-12-5"]
// var datesForDisable2 = ["2023-12-10", "2023-12-9"]
// var datesForDisable3 = ["2023-12-11", "2023-12-13"]
// var datesForDisable4 = ["2023-12-22", "2023-12-25"]
// var datesForDisable5 = ["2023-12-1", "2023-12-3"]
// var datesForDisable6 = ["2023-12-2", "2023-12-4"]
// var input1 = document.getElementsByClassName("check1")[0];
// var input2 = document.getElementsByClassName("check1")[1];
// var input3 = document.getElementsByClassName("check2")[0];
// var input4 = document.getElementsByClassName("check2")[1];
// var input5 = document.getElementsByClassName("check3")[0];
// var input6 = document.getElementsByClassName("check3")[1];
// var input7 = document.getElementsByClassName("check4")[0];
// var input8 = document.getElementsByClassName("check4")[1];
// var input9 = document.getElementsByClassName("check5")[0];
// var input10 = document.getElementsByClassName("check5")[1];
// var input11 = document.getElementsByClassName("check6")[0];
// var input12 = document.getElementsByClassName("check6")[1];

// // room1
// $(input1).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable,
// })
// $(input2).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable,
// })
// // room2
// $(input3).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable2,
// })
// $(input4).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable2,
// })
// // room3
// $(input5).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable3,
// })
// $(input6).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable3,
// })
// // room4
// $(input7).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable4,
// })
// $(input8).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable4,
// })
// // room5
// $(input9).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable5,
// })
// $(input10).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable5,
// })
// // room6
// $(input11).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable6,
// })
// $(input12).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable6,
// })

//post first room
// var checkin1 = document.getquerySelector("input .check1")
// var checkout1 = document.getquerySelector("input .check1")

// async function bookingRoom1() {
//     var booking1 = {
//         check_in: checkin1.value,
//         check_out: checkout1.value
//     }
//     var data = await fetch(`localhost:8000/api/login/`, {
//         method: "post",
//         body: JSON.stringify(booking1)
//     })
//     let res = await data.json()
//     console.log(res);
// }
// bookingRoom1()


//post second room
// var checkin2 = document.getquerySelector("input .check2")
// var checkout2 = document.getquerySelector("input .check2")

// async function bookingRoom1() {
//     var booking2 = {
//         check_in: checkin2.value,
//         check_out: checkout2.value
//     }
//     var data = await fetch(`localhost:8000/api/login/`, {
//         method: "post",
//         body: JSON.stringify(booking2)
//     })
//     let res = await data.json()
//     console.log(res);
// }
// bookingRoom2()







//events
// var datesForDisable1 = ["2023-12-7", "2023-12-8"]

// var input1 = document.getElementById("checkin");
// $(input1).datepicker({
//   format: 'yyyy-mm-dd',
//   autoclose: true,
//   weekStart: 1,
//   calendarWeeks: true,
//   todayHighlight: true,
//   datesDisabled: datesForDisable1,
// })




// let recipesList = [];

// async function getData() {
//     let myReq = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
//     let Data = await myReq.json()
//     recipesList = Data.recipes
//     console.log(recipesList)
//     display()
//     }

//     getData()

//     function display(){
//         let temp = ""
//         recipesList.forEach((element)=>{
//             temp+=`    <div class="d-inline-block ">
//             <div class="item bg-info text-center">
//             <h1>${element.publisher}</h1>
//                 <h6>${element.title}</h6>
//             </div>
//         </div>`
//         })
//         document.getElementById("mypizza").innerHTML = temp
//     }





// review local
// var reviewNameInput = document.getElementById("review-name")
// var reviewMessageInput = document.getElementById("review-message")
// var reviewList = [];
// if (localStorage.getItem("reviews") != null) {
//     reviewList = JSON.parse(localStorage.getItem("reviews"))
//     displayData()
// }


// function addReview() {
//   var review = {
//       reviewName: reviewNameInput.value,
//       reviewMessage: reviewMessageInput.value
//   }
//   reviewList.push(review)
//   localStorage.setItem("reviews", JSON.stringify(reviewList))
//   displayData()
// }
// function displayData() {
//   var temp = "";
//   for (var i = 0; i < reviewList.length; i++) {
//       temp += ` <div class="testimonials-item bg-body-tertiary">
//       <div class="testimonials-name">
//       <h5>`+reviewList[i].reviewName+`</h5>
//     </div>
//     <div class="testimonials-desc">
//       <p><i class="fa-solid fa-comment"></i>`+reviewList[i].reviewMessage+`<i class="fa-solid fa-comment"></i></p>
//     </div>
//     </div>`
//   }
//   document.getElementById("myReview").innerHTML = temp
// }








// async function login() {

//   var user = {
//     UserEmail: emailIput.value,
//     password: passwordIput.value,

//   }

//   var data = await fetch('', {
//     method: "post",
//     body: JSON.stringify(user)
//   })
//   let res = await data.json()

//   console.log(res);
// }
























///////////////////////////////////////////////////////////////////////////////////////////////

// login
// var userNameLoginInput = document.getElementById("username")
// var emailLoginInput = document.getElementById("email")
// var passwordLoginInput = document.getElementById("password")

// async function loginData() {
//     var loginUserData = {
//         username: userNameLoginInput.value,
//         email: emailLoginInput.value,
//         password: passwordLoginInput.value,
//     }
//     var data = await fetch(`http://serco-dev.com:2020/api/login/`, {
//         method: "post",
//         credentials:'include',
//         headers: {
//             'Authorization': `Bearer ${Token}`,
//         },
//             body: JSON.stringify(loginUserData)
//     })
//     let res = await data.json()
//     console.log(res);
// }


// change password
// var oldPassword = document.getElementById("old_password")
// var newPassword = document.getElementById("new_password")

// async function changeData() {
//     var changeUserData = {
//         old_password: oldPassword.value,
//         new_password: newPassword.value,
//     }
//     var data = await fetch(`localhost:8000/api/login/`, {
//         method: "post",
//         body: JSON.stringify(changeUserData)
//     })
//     let res = await data.json()
//     console.log(res);
// }









// // register
// var userNameJoinInput = document.getElementById("username")
// var firstNameJoinInput = document.getElementById("first_name")
// var lastNameJoinInput = document.getElementById("last_name")
// var countryJoinInput = document.getElementById("country")
// var zipJoinInput = document.getElementById("zip")
// var emailJoinInput = document.getElementById("email")
// var passwordJoinInput = document.getElementById("password")
// var hobbiesJoinInput = document.getElementById("hobbies")

// async function joinData() {
//     var joinUserData = {
//         username: userNameJoinInput.value,
//         first_name:firstNameJoinInput.value,
//         last_name:lastNameJoinInput.value,
//         country:countryJoinInput.value,
//         zip:zipJoinInput.value,
//         email: emailJoinInput.value,
//         password: passwordJoinInput.value,
//         hobbies:hobbiesJoinInput.value
//     }
//     var data = await fetch(`http://serco-dev.com:2020/api/register/`, {
//         method: "post",
//         credentials:'include',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(joinUserData)
//     })
//     let res = await data.json()
//     console.log(res);
// }



// review post
// var userPostReview = document.getElementById("user")
// var postReviewMessage = document.getElementById("comment")

// async function sendReview() {
//     var userSendReview = {
//         user: userPostReview.value,
//         comment: postReviewMessage.value,
//     }
//     var data = await fetch(`https://xhotel-backend.onrender.com/api/api/reviews/`, {
//         method: "post",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userSendReview)
//     })
//     let res = await data.json()
//     console.log(res);
// }









//dina


// get and add review
let reviewList = [];

async function addReview() {
    let myReq = await fetch(`http://serco-dev.com:2020/api/api/reviews/`)
    console.log(myReq)
    let Data = await myReq.json()
    reviewList = Data.reviews
    console.log(reviewList)
    displayReview()
    }

    addReview()

    function displayReview(){
        let temp = ""
        reviewList.forEach((element)=>{
            temp+=`<div class="testimonials-item bg-body-tertiary">
        <div class="testimonials-name">
       <h5>${element.user}</h5>
       </div>
       <div class="testimonials-desc">
        <p><i class="fa-solid fa-comment"></i>${element.comment}<i class="fa-solid fa-comment"></i></p>
       </div>
      </div>`
        })
        document.getElementById("myReview").innerHTML = temp
    }






// get and add hotels
// let hotelsList = [];
// async function addHotel() {
//     let myReq = await fetch(``)
//     let Data = await myReq.json()
//     hotelsList = Data.Hotel
//     console.log(hotelsList)
//     displayHotel()
//     }

//     addHotel()

//     function displayHotel(){
//         let temp = ""
//         hotelsList.forEach((element)=>{
//             temp+=`<a href="./booking.html">
//             <div class="hotels-item">
//               <img src="${element.hotelImg}" alt="" />
//               <div class="item-overlay">
//                 <h2>${element.hotelName}</h2>
//                 <span class="d-block">${element.hotelLocation}</span>
//                 <span>${element.hotelAvgPrice}</span>
//               </div>
//             </div>
//           </a>`
//         })
//         document.getElementById("hotelsData").innerHTML = temp
//     }







// dashboard numbers
// let dashList = [];

// async function addDash() {
//     let myReq = await fetch(`http://serco-dev.com:2020/api/api/reviews/`)
//     console.log(myReq)
//     let Data = await myReq.json()
//     dashList = Data.dashnums
//     console.log(dashList)
//     displayDash()

//     }

//     addDash()

//     function displayDash(){
//         let temp = ""
//         dashList.forEach((element)=>{
//             temp+=`<div class="dash-item dashback1 bg-info">
//             <p class="dash-item-desc fw-bold ms-2 ">sales</p>
//             <p class="dash-item-num fw-bold fs-1 ">${element.sales}</p>
//           </div>
//           <div class="dash-item dashback2 bg-info">
//             <p class="dash-item-desc fw-bold ms-2 ">orders</p>
//             <p class="dash-item-num fw-bold fs-1 ">+${element.orders}%</p>
//           </div>
//           <div class="dash-item dashback3 bg-info">
//             <p class="dash-item-desc fw-bold ms-2 ">visits</p>
//             <p class="dash-item-num fw-bold fs-1 ">+${element.visits}%</p>
//           </div>`
//         })
//         document.getElementById("myDash").innerHTML = temp
//     }



// local reviews
// var nameInput = document.getElementById("user")
// var commentInput = document.getElementById("comment")
// var reviewList = [];
// if (localStorage.getItem("reviews") != null) {
//     reviewList = JSON.parse(localStorage.getItem("reviews"))
//     displayData()
// }
// function addreview() {
//     var review = {
//         user: user.value,
//         comment: comment.value,
//     }
//     reviewList.push(review)
//     localStorage.setItem("reviews", JSON.stringify(reviewList))
//     displayData()
// }
// function displayData() {
//     var temp = "";
//     for (var i = 0; i < reviewList.length; i++) {
//         temp += ` <div class="testimonials-item  ">
//         <div class="testimonials-name">
//         <h5>`+reviewList[i].user+`</h5>
//       </div>
//       <div class="testimonials-desc">
//         <p><i class="fa-solid fa-comment"></i>&nbsp;`+reviewList[i].comment+`&nbsp;<i class="fa-solid fa-comment"></i></p>
//       </div>
//       </div> `
//     }
//     document.getElementById("myReview").innerHTML = temp
// }