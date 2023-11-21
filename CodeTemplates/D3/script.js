function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'page1': '<p>This is content for Page 1.</p>',
        'page2': '<p>This is content for Page 2.</p>',
        'page3': '<p>This is content for Page 3.</p>'
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}