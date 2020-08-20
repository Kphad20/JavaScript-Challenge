// From data.js
var tableData = data;

// Console.log the data
console.log(tableData);

// Reference the table body
var tbody = d3.select("tbody");

// Loop through data and append table rows and corresponding table data values to each UFO report object
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// // Select the button and input form
// var button = d3.select("#filter-btn");
// var form = d3.select("form");

// // Create event handlers for clicking the button or pressing the enter key 
// button.on("click", runEnter);
// form.on("submit", runEnter);

// // Create the function to run for both events
// function runEnter() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
//       // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime");
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
//     // Filter by date input
//     var filteredData = tableData.filter(date => date.datetime === inputValue);

//     // Clear table to show filtered table only
//     d3.select("tbody").html("");

//     // Clear input field after submitting
//     d3.select("#datetime").node().value = "";

//     // Loop through data and append filtered data as new table 
//     filteredData.forEach((ufoReport) => {
//         var row = tbody.append("tr");
//         Object.entries(ufoReport).forEach(([key, value]) => {
//           var cell = row.append("td");
//           cell.text(value);
//         });
//       });

//     // Console.log the filtered data
//     console.log(filteredData);
// }

// // Create the function to run for both events
// function runEnter() {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();
//     // Select the input element and get the raw HTML node
//   var inputCity = d3.select("#city");
//   // Get the value property of the input element
//   var cityValue = inputCity.property("value");
//   // Filter by date input
//   var filteredCity = tableData.filter(citySearch => citySearch.city === cityValue);

//   // Clear table to show filtered table only
//   d3.select("tbody").html("");

//   // Clear input field after submitting
//   d3.select("#city").node().value = "";

//   // Loop through data and append filtered data as new table 
//   filteredCity.forEach((ufoReport) => {
//       var row = tbody.append("tr");
//       Object.entries(ufoReport).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//       });
//     });

//   // Console.log the filtered data
//   console.log(filteredCity);
// }

// Filter by events of input elements by passing the event and specific index
function filterTable(event, index) {
  var filter = event.target.value.toLowerCase();
  var rows = document.querySelector("#ufo-table tbody").rows;
  for (var i = 0; i < rows.length; i++) {
    var dateCol = rows[i].cells[0].textContent.toLowerCase();
    var cityCol = rows[i].cells[1].textContent.toLowerCase();
    var stateCol = rows[i].cells[2].textContent.toLowerCase();
    var countryCol = rows[i].cells[3].textContent.toLowerCase();
    var shapeCol = rows[i].cells[4].textContent.toLowerCase();
    if ((dateCol.indexOf(filter) > -1 && index == 0) || (cityCol.indexOf(filter) > -1 && index == 1) || (stateCol.indexOf(filter) > -1 && index == 2) || (
      countryCol.indexOf(filter) > -1 && index == 3) || (shapeCol.indexOf(filter) > -1 && index == 4)) {rows[i].style.display = "";
    } 
    else {
      rows[i].style.display = "none";
    }      
  }
};

document.querySelectorAll('input.form-control').forEach(function(el,idx){
  el.addEventListener('keyup', function(e){
    filterTable(e, idx);
  }, false);
});

// Reset search fields with Reset button
function performReset() {
  document.getElementById("datetime").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  document.getElementById("shape").value = "";
  filterTable(event, 0);
};
