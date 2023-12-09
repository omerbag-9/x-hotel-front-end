// first room checkin and checkout
var datesForDisable = ["2023-12-6", "2023-12-5"]
var input1 = document.getElementsByClassName("check1-2")[0];
var input2 = document.getElementsByClassName("check1-2")[1];


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