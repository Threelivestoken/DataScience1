// JavaScript source code
var percentage = 75;



// Create an SVG container
var svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);





function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'page0': '<p>Default content. Select a page to change this.</p>',
        'page1': '<p>This is content for Page 1.</p>',
        'page2': '<p>This is content for Page 2.</p>',
        'page3': '<p>This is content for Page 3.</p>'
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}