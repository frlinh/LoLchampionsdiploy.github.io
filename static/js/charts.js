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

/ // Champions Info Panel //
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
