import React from 'react';
import chartJS from 'react-chartjs'
const BarGraph = chartJS.Bar;

export default React.createClass({

  render: function() {
    if(this.props.questionType === 'thumbs') {
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
      return <BarGraph data={barChartData} className={this.props.lastOrCurrent} />
    } else if(this.props.questionType === 'multipleChoice3') {
          let barChartData = {
            labels: ["A                               B                               C"],
            datasets: [{
              fillColor: "rgba(255,42,0,1)",
              strokeColor: "rgba(255,42,0)",
              data: [this.props.aCount]
            },
            {
              fillColor: "rgba(0,98,255,1)",
              strokeColor: "rgba(0,98,255,1)",
              data: [this.props.bCount]
            },
            {
              fillColor: "rgba(55,161,74,1)",
              strokeColor: "rgba(55,161,74,1)",
              data: [this.props.cCount]
            }]
          };
          return <BarGraph data={barChartData} className={this.props.lastOrCurrent} />
    } else {
      return <div></div>
    }
  }
});

