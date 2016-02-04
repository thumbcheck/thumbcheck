import React from 'react';
import chartJS from 'react-chartjs';
const BarGraph = chartJS.Bar;

export default React.createClass({

  render: function() {
    let barChartData = {
      labels: ["A               B               C               D               E"],
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
      },
      {
        fillColor: "rgba(30,180,90,1)",
        strokeColor: "rgba(30,180,90,1)",
        data: [this.props.dCount]
      },
      {
        fillColor: "rgba(0,25,180,1)",
        strokeColor: "rgba(0,25,180,1)",
        data: [this.props.eCount]
      }
      ]
    };

    return <BarGraph data={barChartData} className={this.props.lastOrCurrent} />
  }
});
