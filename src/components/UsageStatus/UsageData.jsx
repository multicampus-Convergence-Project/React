import React, { Component } from 'react';
import UsageTemp from './UsageTemp';
import './Usage.css';

let usedList = [];
let total = 0;
class UsageData extends Component {
  id = 1;
  state = {};

  render() {
    const { used } = this.props;
    console.log(used);
    //used.slice(0,10).map((infodata) => {
    used.map((infodata) => {
      return usedList.push(infodata);
    });

    usedList.sort(function (a, b) {
      return b - a;
    });

    usedList = usedList.slice(0, 10);
    console.log(usedList);
    console.log(total);
    return (
      <>
        <div id="usedDataDiv">
        {usedList &&
          usedList.map((infodata) => {
            return (
              <UsageTemp
                key={infodata.id}
                rackTotCnt={infodata.rackTotCnt}
                stationName={infodata.stationName}
                parkingBikeTotCnt={infodata.parkingBikeTotCnt}
                shared={infodata.shared}
                stationId={infodata.stationId}
              ></UsageTemp>
            );
          })}
          </div>
      </>
    );
  }
}

export default UsageData;
