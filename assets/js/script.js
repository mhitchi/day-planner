//create global variables

//get DOM elements
const currentDay = $('#currentDay');
const hour = $('hour');
const textArea = $('textarea');
const saveBtn = $('#saveButton');

//get date
var date = moment().format();

currentDay.text(date);