<script>
  // Select the container
    var container = d3.select("#dots-container");

    // Define the data for the dots
    var data = [
    {color: "blue", cx: 50, cy: 50, radius: 10 },
    {color: "red", cx: 100, cy: 50, radius: 10 },
    {color: "green", cx: 150, cy: 50, radius: 10 },
    ];

    // Append circles to the container based on the data
    container
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return d.cx; })
    .attr("cy", function(d) { return d.cy; })
    .attr("r", function(d) { return d.radius; })
    .attr("fill", function(d) { return d.color; });
</script>