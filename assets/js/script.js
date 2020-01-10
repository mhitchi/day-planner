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
//MAYBE
var notesArr = ['','','','','','','','',''];
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
    textarea.attr('id', i);
    textCol.append(textarea);
  row.append(textCol);

  var saveCol = $('<div>');
  saveCol.attr('class', 'col-xs-2 col-md-1 saveBtn');
    //make save button
    saveButton = $('<button>');
    //saveButton.addClass(rowNumStr);
    saveButton.addClass('saveBtn');
    saveButton.attr('data-index', i);
    saveCol.append(saveButton);
  row.append(saveCol);

  //change color of textarea based on past present or future class
  function getHour() {
    if( hoursArr[i] === moment().format("H") ){
      textCol.addClass('present');
    } else if( hoursArr[i] < moment().format("H") ){
      textCol.addClass('past');
    } else if( hoursArr[i] > moment().format("H") ){
      textCol.addClass('future');
    }
    // console.log(currentHour);
  }

  getHour();

  //save button stores text input locally
  saveButton.on('click', makeNote);

  function makeNote(button_id) {
    var btn = $((this).attr('data-index'));

    localStorage.setItem('hour', $('#' + btn));

    //TODO get thisInput for each button
    //get class of this row
    //idNum =
    //inputTxt = $('#'+ i).val();

    // classNum = $("textarea").attr('class', i);
    // inputTxt = classNum.val();
    //console.log(inputTxt);
    // notesArr.splice(i, 0, classNum);
    //console.log(notesArr);
    //notesArr.push(inputTxt);
    localStorage.setItem('notesArr', JSON.stringify(notesArr));
}

//TODO get text input from local storage and fill
function showNote() {
  // if( inputTxt !== "" ){
    //var fill = JSON.parse(localStorage.getItem(notesArr));
    //textarea.attr('placeholder', fill);
  //   //var fill = localStorage.getItem(inputTxt);
  //   // textarea.attr('placeholder', fill);
  // } else if( inputTxt == "" ){
  //   console.log('nope');
  // }
}

showNote();
  //append row to container
  container.append(row);
}