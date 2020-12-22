import React, { Component } from 'react';
import CanvasJSReact from 'assets/canvas/canvasjs.react';
import { Col } from 'react-bootstrap';
import { Card } from 'components/Card/Card.jsx';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let tooMuchOptionsBar = [];
let tooMuchOptionsLine = [];
let tooMuchOptionsArea = [];

class ColumnChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
    this.addSymbols = this.addSymbols.bind(this);
  }
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1)
      order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const setOptions = () => {
      var stateName = this.props.stateName;

      tooMuchOptionsBar = [];
      tooMuchOptionsLine = [];
      tooMuchOptionsArea = [];

      for (let i = 0; i < this.props.location.length; i++) {
        if ((stateName === '전체' || this.props.location[i].state === stateName) && tooMuchOptionsBar.length < 10) {
          var tooMuchTempBar = {
            label: this.props.location[i].stationName,
            y: this.props.location[i].parkingBikeTotCnt,
          };
          var tooMuchTempLine = {
            label: this.props.location[i].stationName,
            y: this.props.location[i].rackTotCnt,
          };
          var tooMuchTempArea = {
            label: this.props.location[i].stationName,
            y: this.props.location[i].predict,
          };
          tooMuchOptionsBar.push(tooMuchTempBar);
          tooMuchOptionsLine.push(tooMuchTempLine);
          tooMuchOptionsArea.push(tooMuchTempArea);
        }
      }
    };

    setOptions();

    const muchOptions = {
      animationEnabled: true,
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
        verticalAlign: "top"
      },
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: 'column',
          name: "현재 사용 가능 대수",
          showInLegend: true,
          dataPoints: tooMuchOptionsBar,
        }, {
          type: "line",
          name: "자전거 거치대 개수",
          showInLegend: true,
          dataPoints: tooMuchOptionsLine,
        }, {
          type: "area",
          name: "1시간 후 예상 사용 가능 대수",
          markerBorderColor: "white",
          markerBorderThickness: 2,
          showInLegend: true,
          dataPoints: tooMuchOptionsArea,
        }
      ],
    };

    // console.log('optionsArr', tooMuchOptions,tooLessOptions);
    return (
      <Col md={4}>
        <Card
          ctTableFullWidth
          id="chartActivity"
          title="따릉이 재배치 필요 순 Top10 (과다 재적)"
          content={<div>
            <h2 id="title" style={{ textAlign: 'center' }}>
              {this.props.stateName} 과다 재적 순 TOP 10
            </h2>
            <CanvasJSChart
              options={muchOptions}
              onRef={ref => this.chart = ref}
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
          </div>}
        />
      </Col>

    );
  }
}

export default ColumnChart;
