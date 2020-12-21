import React, { Component } from 'react';
import $ from 'jquery';
import CanvasJSReact from '../assets/canvas/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let optionsArr = [];
class ColumnChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ options: optionsArr[0]['state'] });
    }, 3000);
  }

  render() {
    const setOptions = () => {
      for (let i = 0; i < this.props.location.length; i++) {
        var temp = {
          label: this.props.location[i].stationName,
          y: this.props.location[i].shared,
          state: this.props.location[i].state,
        };
        optionsArr.push(temp);
      }
    };

    console.log('ColumnChart ', this.props.location);
    setOptions();

    const options = {
      animationEnabled: true,
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: 'column',
          dataPoints: optionsArr.slice(0, 10),
        },
      ],
    };

    console.log('optionsArr', optionsArr);
    return (
      <div>
        <h2 id="title" style={{ textAlign: 'center' }}>
          서울시 전체 데이터{this.state.options}
        </h2>
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
