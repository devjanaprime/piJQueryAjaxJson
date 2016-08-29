console.log( 'JQuery Ajax JSON Example js sourced' );
// global array to hold student 411
var students = [];

// Pi cohort JSON URL: http://devjana.net/pi/pi_students.json
var jsonURL = 'http://devjana.net/pi/pi_students.json';

var displayStudents = function(){
  console.log( 'in displayStudents' );
  // empty output div
  // targeting it by 'id' so we are using a #
  $('#outputDiv').empty();
  for( var i = 0; i < students.length; i++ ) {
    // new header for the student name
    var newHeader = document.createElement( 'h2' );
    // set text content to student name
    newHeader.textContent = students[i].first_name + ' ' + students[i].last_name;
    // new paragraph for student info
    var newParagraph = document.createElement( 'p' );
    //set textContent
    newParagraph.textContent = students[i].info ;
    // append student info to page
    $("#outputDiv").append( newHeader );
    $("#outputDiv").append( newParagraph );
  } // end for
}; // end displayStudents

// make a call to the server and retrieve JSON info
var getStudents = function(){
  // run on body load
  console.log( 'in getStudents' );
  // ajax call to get the JSON file from server
  $.ajax({
    url: jsonURL,
    dataType: 'JSON',
    success: function( data ){
      // success! if we connected
      console.log( 'in success:', data.students );
      // loop through students in JSON and push into array
      for( var i = 0; i < data.students.length; i++ ) {
        students.push( data.students[i] );
      }
      //display students info
      displayStudents();
    }, // end success
    statusCode: {
      404: function(){
        alert( 'Cannot connect to server' );
      } // end 404
    } // end status code 404 for error
  }); //end ajax
}; // end getStudents
