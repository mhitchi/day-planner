//create global variables

//get DOM elements
const currentDay = $('#currentDay');
//const hour = $('hour');
//const textArea = $('textarea');
//const saveBtn = $('#saveButton');
const container = $('.container');

//get date
var date = moment().format('MMM Do, YYYY');
//display date in currentText
currentDay.text("Today is " + date);

//loop through hours 9-5 and create new row for each
var hoursArr = ['9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM'];
for( var i = 0; i < hoursArr.length; i++ ) {
  var row = $('<div>');
  row.attr('class', 'row');
  //make columns and append columns to row
  var hourCol = $('<div>');
  hourCol.attr('class', 'col-xs-2 col-md-1 hour');
    //make p tag and fill with corresponding hour, append to hourCol
    var p = $('<p>');
    p.text(hoursArr[i]);
    hourCol.append(p);
  row.append(hourCol);

  var textCol = $('<div>');
  textCol.attr('class', 'col-xs-8 col-md-10 textarea');
    //make text area
    var textarea = $('<textarea>');
    textCol.append(textarea);
  row.append(textCol);

  var saveCol = $('<div>');
  saveCol.attr('class', 'col-xs-2 col-md-1 saveBtn');
    //make save button
    var saveButton = $('<button>');
    saveCol.append(saveButton);
  row.append(saveCol);

  //append row to container
  container.append(row);
}