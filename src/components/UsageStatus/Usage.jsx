import React, { Component } from 'react';
import './Usage.css';
import axios from 'axios';
import NewSeoul from '../seoulMap/newSeoul';
import UsageData from './UsageData';
import { func } from 'prop-types';

class Usage extends Component {
  state = {
    loading: false,
    locationList: [],
  };

  rental_office = ()=>{
    axios
      .get(
        'https://sv6eie9w7a.execute-api.us-east-1.amazonaws.com/dev/rental-office'
      )
      .then(({ data }) => {
        this.setState({
          loading: true,
          locationList: data,
        });
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.rental_office();
  }

  render() {
    const { locationList } = this.state;
    console.log(locationList);
    return (
      <>
        <div>
          <b className="mainfontsize hr-sect">
            이용현황 SUMMARY
            {/* <hr align="right" color="40a940" size="10" width="65%"></hr> */}
          </b>
        </div>
        <div className="container">
          <span className="fontsize item">
            <span className="container_count">1</span>이번달 총 이용건수
          </span>

          <span className="fontsize item">
            <span className="container_count">2</span>총 이용 건수
          </span>

          <div className="fontsize item">
            <span className="container_count">3</span>대여소 개수
          </div>
        </div>
        {/* <hr align="right" color="40a940" size="10" width="100%"></hr> */}
        <br />
        <div className="container_left">
          <NewSeoul />
        </div>

        <b className="hr-sect">대여소 이용건수 Top 10</b>
        <div className="container_right">
          <UsageData used={locationList}></UsageData>
        </div>
      </>
    );
  }
}

export default Usage;
