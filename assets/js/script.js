//create global variables

//get DOM elements
const currentDay = $('#currentDay');
var currentHourObj = moment();
var currentHour = currentHourObj.format('h');
//currentHourPre = moment().set('hour', ).format('h');
console.log(currentHour);
//const hour = $('hour');
//const textArea = $('textarea');
//const saveBtn = $('#saveButton');
const container = $('.container');
var textarea;
var inputTxt;
var saveButton;
var thisInput;
var classNum;
var idNum;


//get date
var date = moment().format('MMM Do, YYYY');
//display date in currentText
currentDay.text("Today is " + date);

//loop through hours 9-5 and create new row for each
var hoursArr = [9,10,11,12,13,14,15,16,17];


for( var i = 0; i < hoursArr.length; i++ ) {
  var row = $('<div>');
  row.attr('class', 'row');
  //make columns and append columns to row
  var hourCol = $('<div>');
  hourCol.attr('class', 'col-xs-2 col-md-1 hour');
    //make p tag and fill with corresponding hour, append to hourCol
    var p = $('<p>');
    p.text(moment().hour(hoursArr[i]).format("ha"));

    hourCol.addClass('time-block');
    hourCol.append(p);
  row.append(hourCol);

  var textCol = $('<div>');
  textCol.attr('class', 'col-xs-8 col-md-10 textarea');
    //make text area
    textarea = $('<textarea>');
    var rowNum = i;
    //textarea.addClass(rowNum);
    textarea.attr('id', hoursArr[i]);
    textarea.attr('placeholder', "Enter notes here, then click the \"save\" button.");
    //check local storage for notes
    if( localStorage.getItem(hoursArr[i])){
      var note = localStorage.getItem(hoursArr[i]);
      textarea.text(note);
    }
    textCol.append(textarea);
  row.append(textCol);

  var saveCol = $('<div>');
  saveCol.attr('class', 'col-xs-2 col-md-1 saveBtn');
    //make save button
    saveButton = $('<button>');
    //saveButton.addClass(rowNumStr);
    saveButton.addClass('saveBtn');
    saveButton.attr('data-index', hoursArr[i]);
    saveCol.append(saveButton);
  row.append(saveCol);

  //save button stores text input locally
  saveButton.on('click', function() {
    var button_id = $(this).attr('data-index');
    makeNote(button_id);
  });

  function makeNote(button_id) {
    //save hour and note to local storage
    var hour = button_id;
    var note = $('#' + hour).val();

    localStorage.setItem(hour, note);
  }

  //change color of textarea based on past present or future class
  function getHour() {
    if( hoursArr[i] === moment().format("H") ){
      textCol.addClass('present');
    } else if( hoursArr[i] < moment().format("H") ){
      textCol.addClass('past');
    } else if( hoursArr[i] > moment().format("H") ){
      textCol.addClass('future');
    }
  }

  getHour();

  //append row to container
  container.append(row);
}