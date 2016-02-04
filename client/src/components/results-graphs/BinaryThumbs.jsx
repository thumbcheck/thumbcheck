import React from 'react';
import chartJS from 'react-chartjs';
const BarGraph = chartJS.Bar;

export default React.createClass({

  render: function() {
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
    return ( 
           <div> 
             <h4>Results from last thumbs check</h4>
             <BarGraph data={barChartData} className={this.props.lastOrCurrent} />
             <div>
              <span className="up-thumb-count">Thumbs up count: {this.props.upCount}</span>
              <span className="down-thumb-count move-right">Thumbs down count: {this.props.downCount}</span>
            </div> 
          </div>  
          )
  } 
});
