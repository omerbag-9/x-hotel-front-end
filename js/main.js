var datesForDisable = ["2023-12-6", "2023-12-5"]

$("input").datepicker({
  format: 'yyyy-mm-dd',
  autoclose: true,
  weekStart: 1,
  calendarWeeks: true,
  todayHighlight: true,
  datesDisabled: datesForDisable,
})
