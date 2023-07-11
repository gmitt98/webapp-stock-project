//Copied structure from previous assignment, found here https://github.com/m-janssens-boop/belly_button_challenge.git
//placeholder code that will be changed later to fit actual project needs

function buildStockOne(tickerOne) {

  function buildMetadata(tickerOne) {

    // Access the website and use d3 to operate on the data
    // read in url
    const url = "URL GOES HERE";

    //fetch the JSON data and console log it
   d3.json(url).then((data) => {
    console.log(data);

    // Filter the data for the object with the desired ticker
    let metadata = data.metadata;
    //THIS CALL MAY NEED TO CHANGE DEPENDING ON HOW THE DATA IS FORMATTED
    let filteredArray = metadata.filter(tickerOneObj => tickerOneObj.id == tickerOne);
    let result = filteredArray[0];
    // Select the panel with ticker of `#stock-one-metadata`
    let panel = d3.select("#stock-one-metadata");
  
    // Clear existing metadata - use `.html("")`
    panel.html("");
  
    // Append new tags for each key-value in the metadata
    for (key in result){
      panel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
    };
    });
  };

  function buildChart(tickerOne) {
    // Access the website and use .then to operate on the data
        // read in url
    const url = "URL GOES HERE";

    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
      // Filter the data for the object with the desired ticker
      let tickers = data//TICKER LIST NAME IN JSON GOES HERE;
      let filteredTickersArray = tickers.filter(tickerOneObj => tickerOneObj.symbol == tickerOne);
      let result = filteredTickersArray[0]
      // Pull the desired information (ticker, DECIDE WHAT OTHER INFO TO GRAB) from your filtered data
      let ticker = result.symbol;
      let labels = result.otu_ids;
      let values = result.sample_values;
      
      //DO WE WANT BUBBLE OR BAR OR SOMETHING ELSE?
      // Build a Bubble Chart
      let bubbleTrace = {
       x: labels,
       y: values,
       mode: 'markers',
       marker: {
       color: labels,
       size: values
        }
      };
      let bubbleLayout = {
      title: "Prevalence of OTUs",
      xaxis: {
        title: {
          text: "OTU ID"
        }
      }
      };
      let bubbleData = [bubbleTrace]
      Plotly.newPlot('stock-1', bubbleData, bubbleLayout);
  
    });
    
  };


  //INPUT BUILD MAP FUNCTION
  function buildMap() {

    let myMap = L.map("map-container", {
      center: [45.52, -122.67],
      zoom: 13
    });
    
    // Adding a tile layer (the background map image) to our map:
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

  }

  //THIS PART NEEDS TO BE UPDATED
  function init() {
    // Get the reference to the dropdown menu
    let selector = d3.select("#selStockOne")
  
    // Use the list of sample names to populate the select options
    const url = "URL GOES HERE";

    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
      //CHANGE THIS
    // Do this by pulling the array associated with `names` 
      let idNames = data.names;
      
      // Loop through the names and append to the dropdown menu
      for (let i = 0; i < idNames.length; i++){
        selector.append("option").text(idNames[i]).property("value",idNames[i]);
      };
  
      // Use the first sample from the list to build the initial plots
      let firstSample = idNames[0]
      buildCharts(firstSample)
      buildMetadata(firstSample)
    })
    ;
  }

  function optionChanged(newTicker) {
    // Change your data and update your plots/metadata when newSample is selected from the dropdown
    buildCharts(newTicker);
    buildMetadata(newTicker);
  
  };

  // Initialize the dashboard
    init();

}

function buildStockTwo(tickerTwo) {
  

//COPY buildStockOne WHEN COMPLETE AND UPDATE WITH tickerTwo THROUGHOUT


}