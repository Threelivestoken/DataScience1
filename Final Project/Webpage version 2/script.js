const barChartData = [
    { label: 'Category A', value: 25 },
    { label: 'Category B', value: 40 },
    { label: 'Category C', value: 15 }
    // ... add more data points as needed
  ];
  
  const scatterplotData = [
    { x: 10, y: 20 },
    { x: 30, y: 40 },
    { x: 50, y: 10 }
    // ... add more data points as needed
  ];
  
  const createBarChart = () => {
    const svgBarChart = d3.select("#bar-chart");
  
    const xScaleBarChart = d3.scaleBand()
                             .domain(barChartData.map(d => d.label))
                             .range([0, 500])
                             .padding(0.1);
  
    const yScaleBarChart = d3.scaleLinear()
                             .domain([0, d3.max(barChartData, d => d.value)])
                             .range([300, 0]);
  
    // Add X axis
    svgBarChart.append("g")
      .attr("transform", `translate(0, ${300})`)
      .call(d3.axisBottom(xScaleBarChart))
      .append("text")
      .attr("x", 500 / 2)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .text("Category");
  
    // Add Y axis
    svgBarChart.append("g")
      .call(d3.axisLeft(yScaleBarChart))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - 50)
      .attr("x", 0 - (300 / 2))
      .attr("text-anchor", "middle")
      .text("Value");
  
    // Add bars
    svgBarChart.selectAll("rect")
      .data(barChartData)
      .enter().append("rect")
      .attr("x", d => xScaleBarChart(d.label))
      .attr("y", d => yScaleBarChart(d.value))
      .attr("width", xScaleBarChart.bandwidth())
      .attr("height", d => 300 - yScaleBarChart(d.value))
      .attr("fill", "steelblue")
      .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", "orange");
        showTooltip(event, `Label: ${d.label}, Value: ${d.value}`);
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", "steelblue");
        hideTooltip();
      });
  };
  
  const createScatterplot = () => {
    const svgScatterplot = d3.select("#scatterplot");
  
    const xScaleScatterplot = d3.scaleLinear()
                               .domain([0, d3.max(scatterplotData, d => d.x)])
                               .range([0, 500]);
  
    const yScaleScatterplot = d3.scaleLinear()
                               .domain([0, d3.max(scatterplotData, d => d.y)])
                               .range([300, 0]);
  
    // Add X axis
    svgScatterplot.append("g")
      .attr("transform", `translate(0, ${300})`)
      .call(d3.axisBottom(xScaleScatterplot))
      .append("text")
      .attr("x", 500 / 2)
      .attr("y", 40)
      .attr("text-anchor", "middle")
      .text("X");
  
    // Add Y axis
    svgScatterplot.append("g")
      .call(d3.axisLeft(yScaleScatterplot))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - 50)
      .attr("x", 0 - (300 / 2))
      .attr("text-anchor", "middle")
      .text("Y");
  
    // Add circles
    svgScatterplot.selectAll("circle")
      .data(scatterplotData)
      .enter().append("circle")
      .attr("cx", d => xScaleScatterplot(d.x))
      .attr("cy", d => yScaleScatterplot(d.y))
      .attr("r", 6)
      .attr("fill", "red")
      .on("mouseover", function(event, d) {
        d3.select(this).attr("fill", "orange");
        showTooltip(event, `X: ${d.x}, Y: ${d.y}`);
      })
      .on("mouseout", function() {
        d3.select(this).attr("fill", "red");
        hideTooltip();
      });
  };
  
  // Tooltip functions
  const tooltip = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);
  
  function showTooltip(event, text) {
    tooltip.transition()
           .duration(200)
           .style("opacity", 1);
    tooltip.html(text)
           .style("left", event.pageX + 10 + "px")
           .style("top", event.pageY - 15 + "px");
  }
  
  function hideTooltip() {
    tooltip.transition()
           .duration(200)
           .style("opacity", 0);
  }
  
  createBarChart();
  createScatterplot();
  