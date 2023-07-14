function build_plot(){
  console.log('building the plot...');
  let fpth="./data.geojson";
  let xData=[];
  let yData=[];
  d3.json(fpth).then(function(data) {
    for (let i=0;i<data.length;i++){
      //console.log(data[i]);
      xData.push(data[i]['name']);
      yData.push(data[i]['market_cap']);
      //let qr=data[i]['quick_ratio'];
    }
  });

  let trace1 = {
    x: xData,
    y: yData
  };

  let data = [trace1];
  let layout = {
    title: "Top 100 US Corporations by Market Capitalization"
  };
  
  Plotly.newPlot("plot", data, layout);

}

build_plot();






