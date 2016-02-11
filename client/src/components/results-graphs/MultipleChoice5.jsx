import React from 'react';
import chartJS from 'react-chartjs';
const BarGraph = chartJS.Bar;

export default React.createClass({

  render: function() {
    let barChartData = {
      labels: ["   A             B             C             D             E"],
      datasets: [{
        fillColor: "rgba(0,128,255,1)",
        strokeColor: "black",
        data: [this.props.aCount]
      },
      {
        fillColor: "rgba(254,81,51,1)",
        strokeColor: "black",
        data: [this.props.bCount]
      },
      {
        fillColor: "rgba(34,178,34,1)",
        strokeColor: "black",
        data: [this.props.cCount]
      },
      {
        fillColor: "rgba(234,255,0,1)",
        strokeColor: "black)",
        data: [this.props.dCount]
      },
      {
        fillColor: "rgba(255,0,55,255)",
        strokeColor: "black",
        data: [this.props.eCount]
      }
      ]
    };

    return (
      <div>
        <BarGraph data={barChartData} className={this.props.lastOrCurrent} />
        <div>
          <span className="up-thumb-count">Selected A: {this.props.aCount}</span>          
          <span className="down-thumb-count move-right">Selected B: {this.props.bCount}</span>
          <span className="down-thumb-count move-right">Selected C: {this.props.cCount}</span>
          <span className="down-thumb-count move-right">Selected D: {this.props.dCount}</span>
          <span className="down-thumb-count move-right">Selected E: {this.props.eCount}</span>
        </div> 
      </div>  
      )
  }
});
