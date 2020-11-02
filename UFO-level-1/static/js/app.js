// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(function(sight) {
    console.log(sight);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(sight).forEach(function([key, value]) {
        console.log(key, value);
         // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button, create event handler
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

button.on("click", runEnter); 

function runEnter() {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sight => sight.datetime === inputValue);
    // console.log filter values
    console.log(tableData);

    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
};

