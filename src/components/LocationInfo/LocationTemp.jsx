import React from 'react';

function TestInfo({ local_id, stationLatitude, stationLongitude, state }) {
  return (
    <li key={local_id}>
      <p>
        위도: <span>{stationLatitude}</span>
      </p>
      <p>경도: {stationLongitude}</p>
      <p>state : {state}</p>
    </li>
  );
}

export default TestInfo;
