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
        content1.style.display = 'none';
        centercontainer.style.display = 'none';
    }, 500); // Wait for the transition to complete (500ms)
  
    // Show content2 with a delay and a fade transition
    setTimeout(function () {
      var content2 = document.getElementById('content2');
      content2.style.opacity = '0';
      content2.style.transition = 'opacity 0.5s ease-in-out'; // Add a fade transition
      content2.style.display = 'block';
  
      // Reset content2 opacity after a short delay (to allow for display change)
      setTimeout(function () {
        content2.style.opacity = '1';
      }, 10);
    }, 1000); // Wait for 1 second before showing content2
  }
  


  /* for scatterplot */
  var data = {
    datasets: [{
      data: [{ x: 10, y: 20 }, { x: 30, y: 40 }, { x: 50, y: 60 }, { x: 70, y: 80 }],
      backgroundColor: 'rgba(75, 192, 192, 0.7)',
    }]
  };
  
  var options = {
    scales: { x: { type: 'linear', position: 'bottom' }, y: { type: 'linear', position: 'left' } },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `(${context.parsed.x}, ${context.parsed.y})`
        }
      }
    }
  };
  
  var ctx = document.getElementById('scatterplot').getContext('2d');
  
  new Chart(ctx, { type: 'scatter', data: data, options: options });
  