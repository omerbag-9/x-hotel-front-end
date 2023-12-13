// first room checkin and checkout
// var datesForDisable = ["2023-12-6", "2023-12-5"]
// var datesForDisable2 = ["2023-12-10", "2023-12-9"]
// var input1 = document.getElementsByClassName("check1-2")[0];
// var input2 = document.getElementsByClassName("check1-2")[1];
// var input3 = document.getElementsByClassName("check1-3")[0];
// var input4 = document.getElementsByClassName("check1-4")[1];

// console.log("hell");
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







// get and add review
// let reviewList = [];
// async function addReview() {
//     let myReq = await fetch(``)
//     let Data = await myReq.json()
//     reviewList = Data.reviews
//     console.log(reviewList)
//     displayReview()
//     }

//     addReview()

//     function displayReview(){
//         let temp = ""
//         reviewList.forEach((element)=>{
//             temp+=`<div class="testimonials-item bg-body-tertiary">
//         <div class="testimonials-name">
//        <h5>${element.reviewName}</h5>
//        </div>
//        <div class="testimonials-desc">
//         <p><i class="fa-solid fa-comment"></i>${element.reviewMessage}<i class="fa-solid fa-comment"></i></p>
//        </div>
//       </div>`
//         })
//         document.getElementById("myReview").innerHTML = temp
//     }



























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

////////////////////////////////

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
//     var data = await fetch(`localhost:8000/api/login/`, {
//         method: "post",
//         body: JSON.stringify(loginUserData)
//     })
//     let res = await data.json()
//     console.log(res);
// }
// loginData()









// register
// var userNameJoinInput = document.getElementById("username")
// var firstNameJoinInput = document.getElementById("first_name")
// var lastNameJoinInput = document.getElementById("last_name")
// var countryJoinInput = document.getElementById("country")
// var zipJoinInput = Number(document.getElementById("zip"))
// var emailJoinInput = document.getElementById("email")
// var passwordJoinInput = document.getElementById("password")
// var hobbiesJoinInput = document.getElementById("hobbies")

// async function joinData() {
//     var joinUserData = {
//         username: userNameJoinInput.value,
//         first_name:firstNameJoinInput.value,
//         last_name:lastNameJoinInput,
//         country:countryJoinInput,
//         zip:zipJoinInput,
//         email: emailJoinInput.value,
//         password: passwordJoinInput.value,
//         hobbies:hobbiesJoinInput,
//     }
//     var data = await fetch(`localhost:8000/api/login/`, {
//         method: "post",
//         body: JSON.stringify(joinUserData)
//     })
//     let res = await data.json()
//     console.log(res);
// }
// joinData()


