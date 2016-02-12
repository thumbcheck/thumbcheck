import React from 'react';
import chartJS from 'react-chartjs';
const BarGraph = chartJS.Bar;
import options from './chartOptions.js';

export default React.createClass({

  render: function() {
    let barChartData = {
      labels: [],
      datasets: [{
        fillColor: "rgba(0,128,255,1)",
        data: [this.props.upCount]
      },
      {
        fillColor: "rgba(254,81,51,1)",
        data: [this.props.downCount]
      }]
    };
    return ( 
           <div>              
             <BarGraph options={options} data={barChartData} className={"graph-small-screen thumbs-graph " + this.props.lastOrCurrent} />
             <div>
              <span className="up-thumb-count">Thumbs up count: {this.props.upCount}</span>
              <span className="down-thumb-count move-right">Thumbs down count: {this.props.downCount}</span>
            </div> 
          </div>  
          )
  } 
});
