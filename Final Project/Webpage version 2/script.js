function performSearch() {
    var searchInputValue = document.getElementById('searchInput').value;
  
    // Here you can add your search functionality or redirect logic
    // For simplicity, let's show content1
    var content1 = document.getElementById('content1');
    content1.style.opacity = '1'; // Ensure opacity is reset
    content1.style.transition = 'opacity 0.5s ease-in-out'; // Add a fade transition
    content1.style.display = 'block';
  }
  
  function showContent() {
    // Hide content1 and the search bar with a fade transition
    var content1 = document.getElementById('content1');
    var centercontainer = document.getElementById('center-container');
    content1.style.opacity = '0';
    centercontainer.style.opacity='0';
    setTimeout(function () {
