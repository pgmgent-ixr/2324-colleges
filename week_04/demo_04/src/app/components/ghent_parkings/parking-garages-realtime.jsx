import { useEffect, useState } from "react";

import './parking-garages-realtime.css';

const PARKING_STATES_REALTIME_GHENT_API = 'https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20';

export function ParkingGaragesRealtime () {
  const [parkingStates, setParkingStates] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const data = await getParkingStatesFromApi();
      data.results.sort((a, b) => a.name - b.name)
      setParkingStates(data.results);
    }

    if (parkingStates.length === 0) {
      fetchData();
    }

    const timerId = setInterval(() => {
      fetchData();
    }, 1000*10);
    return () => clearInterval(timerId);

  }, []);

  const getParkingStatesFromApi = async () => {
    const response = await fetch(PARKING_STATES_REALTIME_GHENT_API);
    const data = await response.json();

    return data;
  };

  const getClassnameForCapacity = (availableCapacity, totalCapacity) => {
    const percentage = availableCapacity / totalCapacity * 100;
    if (percentage >= 60) {
      return 'capacity--ok';
    } else if (percentage >= 30) {
      return 'capacity--warning';
    } else {
      return 'capacity--danger';
    }
  };

  return (
    <ul className={`parking-garages`}>
      {!!parkingStates && parkingStates.map((parkingState, index) => {
        return (
          <li className={`parking-garages__item`} key={index}>
            <h2 className={`name`}>{parkingState.name}</h2>
            <span className={`capacity ${getClassnameForCapacity(parkingState.availablecapacity, parkingState.totalcapacity)}`}>
              <span className={`capacity__avalable`}>{parkingState.availablecapacity}</span>
              <span className={`capacity__total`}>{parkingState.totalcapacity}</span>
            </span>
          </li>
        )
      })}
    </ul>
  )
};