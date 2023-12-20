$(document).ready(function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let qntYears = 4;
    let selectYear = $("#year");
    let selectMonth = $("#month");
    let selectDay = $("#day");
    let currentYear = new Date().getFullYear();
  
    for (var y = 0; y < qntYears; y++) {
      let date = new Date(currentYear);
      let yearElem = document.createElement("option");
      yearElem.value = currentYear
      yearElem.textContent = currentYear;
      selectYear.append(yearElem);
      currentYear++;
    }
  
    for (var m = 0; m < 12; m++) {
      let month = monthNames[m];
      let monthElem = document.createElement("option");
      monthElem.value = m;
      monthElem.textContent = month;
      selectMonth.append(monthElem);
    }
  
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();
  
    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);
  
    AdjustDays();
    selectDay.val(day)
  
    function AdjustDays() {
      var year = selectYear.val();
      var month = parseInt(selectMonth.val()) + 1;
      selectDay.empty();
  
      //get the last day, so the number of days in that month
      var days = new Date(year, month, 0).getDate();
  
      //lets create the days of that month
      for (var d = 1; d <= days; d++) {
        var dayElem = document.createElement("option");
        dayElem.value = d;
        dayElem.textContent = d;
        selectDay.append(dayElem);
      }
    }
  });





/////////////////////////////////////////////
  $(document).ready(function() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let qntYears = 4;
    let selectYear = $("#year1");
    let selectMonth = $("#month1");
    let selectDay = $("#day1");
    let currentYear = new Date().getFullYear();
  
    for (var y = 0; y < qntYears; y++) {
      let date = new Date(currentYear);
      let yearElem = document.createElement("option");
      yearElem.value = currentYear
      yearElem.textContent = currentYear;
      selectYear.append(yearElem);
      currentYear++;
    }
  
    for (var m = 0; m < 12; m++) {
      let month = monthNames[m];
      let monthElem = document.createElement("option");
      monthElem.value = m;
      monthElem.textContent = month;
      selectMonth.append(monthElem);
    }
  
    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();
  
    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);
  
    AdjustDays();
    selectDay.val(day)
  
    function AdjustDays() {
      var year = selectYear.val();
      var month = parseInt(selectMonth.val()) + 1;
      selectDay.empty();
  
      //get the last day, so the number of days in that month
      var days = new Date(year, month, 0).getDate();
  
      //lets create the days of that month
      for (var d = 1; d <= days; d++) {
        var dayElem = document.createElement("option");
        dayElem.value = d;
        dayElem.textContent = d;
        selectDay.append(dayElem);
      }
    }
  });
////////////////////////////////////////////////////////////////



var checkinyear = document.getElementById("year")
var checkinmonth = document.getElementById("month")
var checkinday = document.getElementById("day")
var checkoutyear = document.getElementById("year1")
var checkoutmonth = document.getElementById("month1")
var checkoutday = document.getElementById("day1")
var adult = document.getElementById("adult")
var kid = document.getElementById("kids")
var id ;

async function book() {
    var userSendBook = {
        check_in_date: checkinyear.value+'-'+checkinmonth.value+'-'+checkinday.value,
        check_out_date: checkoutyear.value+'-'+checkoutmonth.value+'-'+checkoutday.value,
        adult:adult.value,
        kids:kid.value,
        id:id.value
    }
    var data = await fetch(`http://127.0.0.1:8000/api/booking/`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userSendBook)
    })
    let res = await data.json()
    console.log(res);
}
