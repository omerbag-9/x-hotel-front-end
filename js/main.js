// first room checkin and checkout
var datesForDisable = ["2023-12-6", "2023-12-5"]
var datesForDisable2 = ["2023-12-10", "2023-12-9"]
var input1 = document.getElementsByClassName("check1-2")[0];
var input2 = document.getElementsByClassName("check1-2")[1];
var input3 = document.getElementsByClassName("check1-3")[0];
var input4 = document.getElementsByClassName("check1-4")[1];

console.log("hell");
$(input1).datepicker({
  format: 'yyyy-mm-dd',
  autoclose: true,
  weekStart: 1,
  calendarWeeks: true,
  todayHighlight: true,
  datesDisabled: datesForDisable,
})
$(input2).datepicker({
  format: 'yyyy-mm-dd',
  autoclose: true,
  weekStart: 1,
  calendarWeeks: true,
  todayHighlight: true,
  datesDisabled: datesForDisable,
})


$(input3).datepicker({
  format: 'yyyy-mm-dd',
  autoclose: true,
  weekStart: 1,
  calendarWeeks: true,
  todayHighlight: true,
  datesDisabled: datesForDisable2,
})
$(input4).datepicker({
  format: 'yyyy-mm-dd',
  autoclose: true,
  weekStart: 1,
  calendarWeeks: true,
  todayHighlight: true,
  datesDisabled: datesForDisable2,
})




var datesForDisable1 = ["2023-12-7", "2023-12-8"]

var input1 = document.getElementById("checkin");
$(input1).datepicker({
  format: 'yyyy-mm-dd',
  autoclose: true,
  weekStart: 1,
  calendarWeeks: true,
  todayHighlight: true,
  datesDisabled: datesForDisable1,
})


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

var firstNameInput = getElementById("validationDefault01");
var lastNameInput = getElementById("validationDefault02");
var emailInput = getElementById("validationDefaultUsername");
var countryInput = getElementById("validationDefault03");
var zipInput = getElementById("validationDefault05");
var hobbiesInput = getElementById("validationDefault08");
var passwordInput = getElementById("password");

async function register() {

  var UserProfile = {
    first_name: firstNameInput.value,
    last_name: lastNameInput.value,
    email: emailInput.value,
    country:countryInput.value,
    zip: Number(zipInput.value),
    hobbies: hobbiesInput.value,
    password: passwordInput.value,
  }

  var data = await fetch('', {
    method: "POST",
    body: JSON.stringify(UserProfile)
  })
  let res = await data.json()

  console.log(res);
}