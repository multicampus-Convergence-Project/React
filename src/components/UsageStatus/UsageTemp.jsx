import React, { useState } from 'react';
import './Usage.css';

function UsageTemp({
  id,
  rackTotCnt,
  stationName,
  parkingBikeTotCnt,
  shared,
  stationId,
}) {
  const [_used, setUsed] = useState();
  return (
    <div id={id} class="usageTemp">
      {/* <p>rackTotCnt: {rackTotCnt}</p>    */}
      <p>stationName: {stationName} parkingBikeTotCnt: {parkingBikeTotCnt} (shared: {shared})</p>
      {/* <p>stationId: {stationId}</p> */}
    </div>
  );
}

export default UsageTemp;
