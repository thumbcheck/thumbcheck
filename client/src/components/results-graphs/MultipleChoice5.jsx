import React from 'react';
import chartJS from 'react-chartjs';
const BarGraph = chartJS.Bar;

export default React.createClass({

  render: function() {
    let barChartData = {
      labels: [],
      datasets: [{
        fillColor: "rgba(0,128,255,1)",        
        data: [this.props.aCount]
      },
      {
        fillColor: "rgba(254,81,51,1)",        
        data: [this.props.bCount]
      },
      {
        fillColor: "rgba(34,178,34,1)",        
        data: [this.props.cCount]
      },
      {
        fillColor: "rgba(234,255,0,1)",        
        data: [this.props.dCount]
      },
      {
        fillColor: "rgba(255,0,55,255)",        
        data: [this.props.eCount]
      }
      ]
    };

    return (
      <div>
        <BarGraph data={barChartData} className={"graph-small-screen " + this.props.lastOrCurrent} />
        <div className="">
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
