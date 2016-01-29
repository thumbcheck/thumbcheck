import React from 'react';
import chartJS from 'react-chartjs'
const BarGraph = chartJS.Bar;

export default React.createClass({
  render: function() {
  	//const chartOptions 
  	let barChartData = {
		  labels: ["Thumbs-up                            Thumbs-down"],
		  datasets: [{
		    fillColor: "rgba(0,60,100,1)",
		    strokeColor: "black",
		    data: [this.props.upCount]
		  },
		  {
		    fillColor: "rgba(0,60,100,1)",
		    strokeColor: "black",
		    data: [this.props.downCount]
		  }]
		};

    return <BarGraph data={barChartData} width="600" height="450"/>
  }
});

