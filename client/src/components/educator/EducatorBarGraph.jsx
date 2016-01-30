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
		//if (this.props.lastOrCurrent === undefined) {this.props.lastOrCurrent = 'current-result-graph';}
		console.log('lat or current?', this.props.lastOrCurrent);
    return <BarGraph data={barChartData} className={this.props.lastOrCurrent} />
  }
});

