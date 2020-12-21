import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvas/canvasjs.react';
import { Col } from 'react-bootstrap';
import { Card } from 'components/Card/Card.jsx';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let tooMuchOptions = [];
let tooLessOptions = [];
class ColumnChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
  }

  render() {
    const setOptions = () => {
      var stateName = this.props.stateName;
      tooMuchOptions = [];
      tooLessOptions = [];
      var totalLen = this.props.location.length - 1;
      for (let i = 0; i < this.props.location.length; i++) {
        if ((stateName === '전체' || this.props.location[i].state === stateName) && tooMuchOptions.length < 10) {
          var tooMuchTemp = {
            label: this.props.location[i].stationName,
            y: this.props.location[i].predict,
          };
          tooMuchOptions.push(tooMuchTemp);
        }
        if ((stateName === '전체' || this.props.location[totalLen - i].state === stateName) && tooLessOptions.length < 10) {
          var tooLessTemp = {
            label: this.props.location[totalLen - i].stationName,
            y: this.props.location[totalLen - i].predict,
          };
          tooLessOptions.push(tooLessTemp);
        }
      }
    };

    setOptions();
    
    const muchOptions = {
      animationEnabled: true,
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: 'column',
          dataPoints: tooMuchOptions,
        },
      ],
    };

    const lessOptions = {
      animationEnabled: true,
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: 'column',
          dataPoints: tooLessOptions,
        },
      ],
    };

    console.log('optionsArr', tooMuchOptions,tooLessOptions);
    return (
      <div>
        <Col md={6}>
          <Card
            id="chartActivity"
            title="따릉이 재배치 필요 순 Top10 (과다 재적)"
            content={<div>
              <h2 id="title" style={{ textAlign: 'center' }}>
                {this.props.stateName} 과다 재적 순 TOP 10
            </h2>
              <CanvasJSChart
                options={muchOptions}
              /* onRef={ref => this.chart = ref} */
              />
              {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>}
          />
        </Col>
        <Col md={6}>
          <Card
            id="chartActivity"
            title="따릉이 재배치 필요 순 Top10 (과소 재적)"
            content={<div>
              <h2 id="title" style={{ textAlign: 'center' }}>
                {this.props.stateName} 과소 재적 순 TOP 10
            </h2>
              <CanvasJSChart
                options={lessOptions}
              /* onRef={ref => this.chart = ref} */
              />
              {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>}
          />
        </Col>
      </div>
    );
  }
}

export default ColumnChart;
