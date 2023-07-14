//Copied structure from previous assignment, found here https://github.com/m-janssens-boop/belly_button_challenge.git
//placeholder code that will be changed later to fit actual project needs

// function buildStockOne(tickerOne) {

//   function buildMetadata(tickerOne) {

//     // Access the website and use d3 to operate on the data
//     // read in url
//     const url = `https://x6s1zdiuy5.execute-api.us-west-2.amazonaws.com/default/stockdata?ticker=${tickerOne}`;

//     //fetch the JSON data and console log it
//    d3.json(url).then((data) => {
//     console.log(data);

//     // Select the panel with ticker of `#stock-one-metadata`
//     let panel = d3.select("#stock-one-metadata");
  
//     // Clear existing metadata - use `.html("")`
//     panel.html("");
    
//     // grab latest data
//     let result = data.date
//     // Append new tags for each key-value in the metadata
//     for (key in result){
//       panel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
//     };
//     });
//   };

//   function buildChart(tickerOne) {
//     // Access the website and use .then to operate on the data
//         // read in url
//     const url = "URL GOES HERE";

//     //fetch the JSON data and console log it
//     d3.json(url).then((data) => {
//       // Filter the data for the object with the desired ticker
//       let tickers = data.tickers;
//       let filteredTickersArray = tickers.filter(tickerOneObj => tickerOneObj.symbol == tickerOne);
//       let result = filteredTickersArray[0]
//       // Pull the desired information (ticker, long name, sector, daily volume, ) from your filtered data
//       let ticker = result.symbol;
//       let labels = result.otu_ids;
//       let values = result.sample_values;
      
//       //BUILD gauge chart for 52 week metrics
//       // Trig to calc meter point
//   let degrees = 180 - level;
//   let radius = 0.5;
//   let radians = (degrees * Math.PI) / 180;
//   let x = radius * Math.cos(radians);
//   let y = radius * Math.sin(radians);

//   // Path: may have to change to create a better triangle
//   let mainPath = "M -.0 -0.05 L .0 0.05 L ";
//   let pathX = String(x);
//   let space = " ";
//   let pathY = String(y);
//   let pathEnd = " Z";
//   let path = mainPath.concat(pathX, space, pathY, pathEnd);

//   let data = [
//     {
//       type: "scatter",
//       x: [0],
//       y: [0],
//       marker: { size: 12, color: "850000" },
//       showlegend: false,
//       name: "Freq",
//       text: level,
//       hoverinfo: "text+name"
//     },
//     {
//       values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
//       rotation: 90,
//       text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
//       textinfo: "text",
//       textposition: "inside",
//       marker: {
//         colors: [
//           "rgba(0, 105, 11, .5)",
//           "rgba(10, 120, 22, .5)",
//           "rgba(14, 127, 0, .5)",
//           "rgba(110, 154, 22, .5)",
//           "rgba(170, 202, 42, .5)",
//           "rgba(202, 209, 95, .5)",
//           "rgba(210, 206, 145, .5)",
//           "rgba(232, 226, 202, .5)",
//           "rgba(240, 230, 215, .5)",
//           "rgba(255, 255, 255, 0)"
//         ]
//       },
//       labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
//       hoverinfo: "label",
//       hole: 0.5,
//       type: "pie",
//       showlegend: false
//     }
//   ];

//   let layout = {
//     shapes: [
//       {
//         type: "path",
//         path: path,
//         fillcolor: "850000",
//         line: {
//           color: "850000"
//         }
//       }
//     ],
//     title: "<b>52 Week High/Low</b> <br> And Latest Close",
//     height: 500,
//     width: 500,
//     xaxis: {
//       zeroline: false,
//       showticklabels: false,
//       showgrid: false,
//       range: [-1, 1]
//     },
//     yaxis: {
//       zeroline: false,
//       showticklabels: false,
//       showgrid: false,
//       range: [-1, 1]
//     }
//   };

//   let GAUGE = document.getElementById("gauge");
//   Plotly.newPlot(GAUGE, data, layout);

  
//     });
    
//   };


//   //INPUT BUILD MAP FUNCTION
//   function buildMap() {

  

//   }

//   //THIS PART IS UPDATED. NEEDS BOTH FUNCTIONS AT END TO BE UNCOMMENTED
//   function init() {
//     // Get the reference to the dropdown menu
//     let selector = d3.select("#selStockOne")
  
//       // Use the list of tickers to populate the select options
//       const url = "https://znjanxz3h6.execute-api.us-west-2.amazonaws.com/default";
  
//       //fetch the JSON data and console log it
//       d3.json(url).then((data) => {
//         let tickers = data.body
//         // Loop through the names and append to the dropdown menu
//         for (let i = 0; i < tickers.length; i++){
//           let ticker = tickers[i][0];
//           console.log(ticker)
//           selector.append("option").text(ticker).property("value",ticker);
//         };
  
//       // Use the first sample from the list to build the initial plots
//       // let firstTicker = tickers[0]
//       // buildChart(firstTicker)
//       // buildMetadata(firstTicker)
//     })
//     ;
//   }

//   function optionChanged(newTicker) {
//     // Change your data and update your plots/metadata when newTicker is selected from the dropdown
//     buildChart(newTicker);
//     buildMetadata(newTicker);
  
//   };

//   // Initialize the dashboard
//     init();

// }

// function buildStockTwo(tickerTwo) {
  

// //COPY buildStockOne WHEN COMPLETE AND UPDATE WITH tickerTwo THROUGHOUT


// }




function buildChart() {
  // Access the website and use .then to operate on the data
      // read in url
  const url = "./stock_data_2023-07-11.json"; 

  //fetch the JSON data and console log it
  d3.json(url).then((data) => {
    
    // Filter the data for the object with the desired ticker
    let info = data[0]
    // Pull the  52 week low/high and the latest close
    let low = info["52WeekLow"];
    let high = info["52WeekHigh"];
    let close = info["previousClose"]
    
    //BUILD gauge chart for 52 week metrics
    //semi-circle gauge chart
   let plotData = [
    {
      domain: {x: [0,1], y: [0,1]},
      value: close,
      title: {text: "Previous Close in Relation to 52 Week High/Low"},
      type: "indicator",
      mode: "gauge+number+delta",
      delta: { reference: low },
    gauge: {
      axis: { range: [low, high] },
      // steps: [
      //   { range: [0, low], color: "lightgray" },
      //   { range: [250, 400], color: "gray" }
      // ],
    }
    }
   ];

   let layout = {width: 600, height: 500, margin: { t: 0, b: 0 } };

    let GAUGE = document.getElementById("gauge-1");
    Plotly.newPlot(GAUGE, plotData, layout);


   });
  
};

buildChart()
