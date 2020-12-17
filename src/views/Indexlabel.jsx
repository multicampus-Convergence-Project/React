import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvas/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  render() {
    let optionsArr = [];
    const setOptions = () => {
      for(let i=0;i<this.props.location.length;i++){
        var temp = {
          label: this.props.location[i].stationName,
          y: this.props.location[i].shared
        };
        optionsArr.push(temp);
      }
    }

    console.log('ColumnChart ', this.props.location);
    console.log('stateName:',this.props.stateName);
    setOptions();

    const options = {
      animationEnabled: true,
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: 'column',
          dataPoints: optionsArr,
        },
      ],
    };

    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>클릭한 지역 보여주기</h2>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default ColumnChart;