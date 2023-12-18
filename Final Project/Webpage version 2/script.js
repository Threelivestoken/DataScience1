const data = [
    { label: 'Category A', value: 25 },
    { label: 'Category B', value: 40 },
    { label: 'Category C', value: 15 }
    // ... add more data points as needed
  ];
  
  const svg = d3.select("#chart");
  
  const xScale = d3.scaleBand()
                  .domain(data.map(d => d.label))
                  .range([0, 500])
                  .padding(0.1);
  
  const yScale = d3.scaleLinear()
                  .domain([0, d3.max(data, d => d.value)])
                  .range([300, 0]);
  
  // Add bars
  svg.selectAll("rect")
     .data(data)
     .enter().append("rect")
     .attr("x", d => xScale(d.label))
     .attr("y", d => yScale(d.value))
     .attr("width", xScale.bandwidth())
     .attr("height", d => 300 - yScale(d.value))
     .attr("fill", "blue")
     .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", "orange");
        showTooltip(event, d);
     })
     .on("mouseout", function() {
        d3.select(this).attr("fill", "blue");
        hideTooltip();
     });
  
  // Tooltip functions
  const tooltip = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);
  
  function showTooltip(event, d) {
    tooltip.transition()
           .duration(200)
           .style("opacity", 1);
    tooltip.html(`<strong>${d.label}</strong>: ${d.value}`)
           .style("left", event.pageX + 10 + "px")
           .style("top", event.pageY - 15 + "px");
  }
  
  function hideTooltip() {
    tooltip.transition()
           .duration(200)
           .style("opacity", 0);
  }
  