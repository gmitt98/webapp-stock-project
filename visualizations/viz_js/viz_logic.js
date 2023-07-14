//Copied structure from previous assignment, found here https://github.com/m-janssens-boop/belly_button_challenge.git
//placeholder code that will be changed later to fit actual project needs

function buildStockOne(tickerOne) {

  function buildMetadata(tickerOne) {

    // Access the website and use d3 to operate on the data
    // read in url
    const url = `https://x6s1zdiuy5.execute-api.us-west-2.amazonaws.com/default/stockdata?ticker=${tickerOne}`;

    //fetch the JSON data and console log it
   d3.json(url).then((data) => {
    console.log(data);

    // Select the panel with ticker of `#stock-one-metadata`
    let panel = d3.select("#stock-one-metadata");
  
    // Clear existing metadata - use `.html("")`
    panel.html("");
    
    // grab latest data
    let result = data.date
    // Append new tags for each key-value in the metadata
    for (key in result){
      panel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
    };
    });
  };

 //THIS PART IS ALMOST DONE     
function buildChart(tickerOne) {
  // Access the website and use .then to operate on the data
      // read in url
  const url = "./stock_data_2023-07-11.json"; 

  //fetch the JSON data and console log it
  d3.json(url).then((data) => {
    
    // Filter the data for the object with the desired ticker
    //THIS PART NEEDS TO BE UPDATED TO BE ABLW TO FEED THE tickerOne into it
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
      title: {text: "Previous Close in Relation to 52 Week Low/High"},
      type: "indicator",
      mode: "gauge+number+delta",
      delta: { reference: low },
      number: {prefix: "$"},
      gauge: {
        axis: { range: [low, high] },
      steps: [
        { range: [low, close], color: "orange" },
        { range: [close, high], color: "purple" }
      ],
    }
    }
   ];

   let layout = {
    width: 700, 
    height: 600, 
    margin: { t: 10, b: 10 },
    annotations: [
      {
        x: -0.05,
        y: 0.2,
        text: `<b>52 Week Low: $${low}</b>`,
        showarrow: false,
        font: {size: 14}
      },
      {
        x: 1.1,
        y: 0.2,
        text: `<b>52 Week High: $${high}</b>`,
        showarrow: false,
        font: {size: 14}
      }
    ]
  };

    let GAUGE = document.getElementById("gauge-1");
    Plotly.newPlot(GAUGE, plotData, layout);


   });
  
};

//   //THIS PART IS UPDATED. NEEDS BOTH FUNCTIONS AT END TO BE UNCOMMENTED
  function init() {
    // Get the reference to the dropdown menu
    let selector = d3.select("#selStockOne")
  
      // Use the list of tickers to populate the select options
      const url = "https://znjanxz3h6.execute-api.us-west-2.amazonaws.com/default";
  
      //fetch the JSON data and console log it
      d3.json(url).then((data) => {
        let tickers = data.body
        // Loop through the names and append to the dropdown menu
        for (let i = 0; i < tickers.length; i++){
          let ticker = tickers[i][0];
          console.log(ticker)
          selector.append("option").text(ticker).property("value",ticker);
        };
  
      // Use the first sample from the list to build the initial plots
      // let firstTicker = tickers[0]
      // buildChart(firstTicker)
      // buildMetadata(firstTicker)
    })
    ;
  }

//   function optionChanged(newTicker) {
//     // Change your data and update your plots/metadata when newTicker is selected from the dropdown
//     buildChart(newTicker);
//     buildMetadata(newTicker);
  
//   };

//   // Initialize the dashboard
//     init();

}

// function buildStockTwo(tickerTwo) {
  

// //COPY buildStockOne WHEN COMPLETE AND UPDATE WITH tickerTwo THROUGHOUT


// }

function init() {
  // Get the reference to the dropdown menu
  let selector = d3.select("#selStockOne")

    // Use the list of tickers to populate the select options
    const url = "https://znjanxz3h6.execute-api.us-west-2.amazonaws.com/default";

    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
      let tickers = data.body
      // Loop through the names and append to the dropdown menu
      for (let i = 0; i < tickers.length; i++){
        let ticker = tickers[i][0];
        // console.log(ticker)
        selector.append("option").text(ticker).property("value",ticker);
      };

      // Use the first sample from the list to build the initial plots
      let firstTicker = tickers[0][0]
      // buildChart(firstTicker)
      buildMetadata(firstTicker)
    })
  ;
}

init()


function buildMetadata(tickerOne) {

  // Access the website and use d3 to operate on the data
  // read in url
  const url = "./stock_data_2023-07-11.json";

  //fetch the JSON data and console log it
  d3.json(url).then((data) => {
    // console.log(data);

    // Select the panel with ticker of `#stock-one-metadata`
    let panel = d3.select("#stock-one-metadata");

    // Clear existing metadata - use `.html("")`
    panel.html("");
    
    // grab the data associated with the selected ticker
    let results = data.filter((tickerRow) => {
      return tickerOne == tickerRow.ticker
    })
    let result = results[0]
    // Append new tags for each key-value in the metadata
    for (key in result){
      panel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
    };
  });
};

//buildMetadata()