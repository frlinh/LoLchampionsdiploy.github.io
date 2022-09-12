// Champions of Champions //
// python -m http.server
const url = "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json";

function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of names to populate the select options
    d3.json(url).then((data) => {
        console.log(data);
        var championName = (data.data);
        for (let item in championName) {
            selector
                .append("option")
                .text(item)
                .property("value", item);
        }
  
        // Use the first champion from the list to build the initial plots
        function optionChanged(firstChampion) {
        var firstChampion = item[0];
        //buildCharts(firstChampion);
        buildMetadata(firstChampion);
        }
    });
};

// Initialize the dashboard
init();

function optionChanged(newChampion) {
    // Fetch new data each time a new champion is selected
    //buildCharts(newChampion);
    buildMetadata(newChampion);
}

// Champions Info Panel //
function buildMetadata(item) {
    d3.json(url).then((data) => {
        var item = (data.data);
        for (let item in championInfo)
        // Filter SEARCH the data for the object with the desired champion name
        var resultArray = item.search(itemObj => itemObj.id == item);
        var result = resultArray[0];
        // Use d3 to select the panel with champion info
        var PANEL = d3.select("#championInfo");
// // Champions Info Panel //
// function buildMetadata(item) {
//     d3.json(url).then((data) => {
//         var championInfo = (data.data);
//         for (let info in championInfo)
//         // Filter the data for the object with the desired sample number
//         var resultArray = championInfo.filter(itemObj => itemObj.info == item);
//         var result = resultArray[0];
//         // Use d3 to select the panel with id of `#stats-metadata`
//         var PANEL = d3.select("#championInfo");

//         // Use `.html("") to clear any existing metadata
//         PANEL.html("");

//         // Use `Object.entries` to add each key and value pair to the panel
//         // Hint: Inside the loop, you will need to use d3 to append new
//         // tags for each key-value in the metadata.
//         Object.entries(result).forEach(([key, value]) => {
//         PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//         });
    });
}

//   // Bar Chart //
  
//   // 1. Create the buildCharts function.
//   function buildCharts(sample) {
  
//     // 2. Use d3.json to load and retrieve the samples.json file 
//     d3.json("samples.json").then((data) => {
  
//       // 3. Create a variable that holds the samples array. 
//       var samples = data.samples;
  
//       // 4. Create a variable that filters the samples for the object with the desired sample number.
//       var filteredSamples = samples.filter(sampleObj => sampleObj.id == sample);
  
//       // 5. Create a variable that holds the first sample in the array.
//       var firstSample = filteredSamples[0];
  
//       // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
//       var otuIds = firstSample.otu_ids;
//       var otuLables = firstSample.otu_labels;
//       var sampleValues = firstSample.sample_values;
  
//       // 7. Create the yticks for the bar chart.
//       // Hint: Get the the top 10 otu_ids and map them in descending order  
//       //  so the otu_ids with the most bacteria are last. 
//       var yticks = otuIds.slice(0,10).reverse().map(function (elem) {return `OTU ${elem}`});
//       var xticks = sampleValues.slice(0,10).reverse();
//       var labels = otuLables.slice(0,10).reverse();
  
//       // 8. Create the trace for the bar chart. 
//       var barData = [{
//         x: xticks,
//         y: yticks,
//         type: 'bar',
//         orientation: 'h',
//         opacity: 0.65,
//         marker: {
//           color: '#F9B89F',
//           line: {
//             color: '#753139',
//             width: 1.5},
//           },
//         text: labels
//       }];
  
//       // 9. Create the layout for the bar chart. 
//       var barLayout = {
//         title: "Top 10 Bacteria Cultures Found",
//         xaxis: {title: "Sample Values"},
//         yaxis: {title: "OTU ID"},
//         plot_bgcolor: '#F3EDEA',
//         paper_bgcolor: '#F3EDEA'
//       };
  
//       // 10. Use Plotly to plot the data with the layout. 
//       Plotly.newPlot("bar", barData, barLayout);
  
//   // Bubble charts //
  
//       // 1. Create the trace for the bubble chart.
//       var bubbleData = [{
//         x: otuIds,
//         y: sampleValues,
//         text: otuLables,
//         mode: 'markers',
//         marker: {
//           size: sampleValues,
//           color: otuIds
//         }  
//       }];
  
//       // 2. Create the layout for the bubble chart.
//       var bubbleLayout = {
//         title: "Bacteria Cultures Per Sample",
//         xaxis: {title: "OTU ID",
//         showgrid: false, // remove grid
//         zeroline: false}, // remove verticle zero line
//         paper_bgcolor: 'rgba(0,0,0,0)', 
//         plot_bgcolor: 'rgba(0,0,0,0)',
//         showlegend: false,
//       };
  
//       // 3. Use Plotly to plot the data with the layout.
//       Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  
//   // Wasing Freq. Gauge //   
  
//       // 3. Create variables to hold the washing frequency
//       var metadata = data.metadata;
//       var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);
//       var metaResult = metadataArray[0];
//       var washingFreq = parseInt(metaResult.wfreq);
   
//       // 4. Create the trace for the gauge chart.
//       var gaugeData = [{
//         value: washingFreq,
//         title: {text: "Belly Button Washing Frequency<br>Scrubs per Week"},
//         type: "indicator",
//         mode: "gauge+number",
//         gauge: {
//           bar: {color: "#531A21"},
//           axis: {range: [0,10]},
//           steps: [
//             {range: [0,2], color:"#F5EBE7"},
//             {range: [2,4], color:"#F7D7CA"},
//             {range: [4,6], color:"#F9B89F"},
//             {range: [6,8], color:"#D77883"},
//             {range: [8,10], color:"#B43847"}
//           ]
//         }
//       }];
  
//       // 5. Create the layout for the gauge chart.
//       var gaugeLayout = { 
//         width: 600, 
//         height: 450, 
//         paper_bgcolor: 'rgba(0,0,0,0)', 
//         plot_bgcolor: 'rgba(0,0,0,0)', 
//         margin: {t: 0, b: 0}
//       };
  
//       // 6. Use Plotly to plot the gauge data and layout.
//       Plotly.newPlot("gauge", gaugeData, gaugeLayout);
//     });
//   }