import React, { Component } from 'react';
import TestInfo from './LocationTemp';

class Location extends Component {
  id = 1;
  state = {};

  render() {
    const { location } = this.props;
    return (
      <>
        {location &&
          location.map((infodata) => {
            return (
              <TestInfo
                key={infodata.local_id}
                stationLatitude={infodata.stationLatitude}
                stationLongitude={infodata.stationLongitude}
                state={infodata.state}
              ></TestInfo>
            );
          })}
      </>
    );
  }
}

export default Location;
