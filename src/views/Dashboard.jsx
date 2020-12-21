import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import axios from "axios";
import { Card } from 'components/Card/Card.jsx';
import { StatsCard } from 'components/StatsCard/StatsCard.jsx';
import NewSeoul from "components/seoulMap/newSeoul";
import MapContainer from 'components/specificMap/MapContainer';
import ChartWithIndexLabel from 'views/Indexlabel';
import SnsTable from 'views/TableList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData:[],
      location: [],
      location2: [],
      shock:[],
      stateName: '',
      fixedClasses: 'dropdown show-dropdown open',
    };
    this.handleSetState = this.handleSetState.bind(this);
  }

  componentDidMount() {
    this.locationDb();
    this.shockDb();
  }
  locationApiEndpoint =
    "https://yfjpq3vo26.execute-api.us-east-1.amazonaws.com/dev/location";
  shockApiEndpoint =
    "https://sv6eie9w7a.execute-api.us-east-1.amazonaws.com/dev/rental-office";
  
  locationDb = async () => {
    await axios.get(this.locationApiEndpoint).then((res) => {
      this.setState({ location: res.data });
      this.setState({ location2: res.data.slice(0, 10) });
    });
  };
  shockDb = async () => {
    await axios.get(this.shockApiEndpoint).then((res) => {
      this.setState({ shock: res.data });
    });
  };

  handleSetState = (name)=> {
    this.setState({
      stateData : name.split(","),
      stateName: name.split(",")[0]
    });
    alert(name.split(",")[0]+"가 선택되었습니다.");
    
  };

  render() {
    console.log("location:", this.state.location);
    console.log("shock:", this.state.shock);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-bicycle text-success" />}
                statsText="이번 달 주행거리"
                statsValue="105Km"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-stopwatch text-danger" />}
                statsText="평균 이용시간"
                statsValue="0시간 23분"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-map-2 text-warning" />}
                statsText="보관소 "
                statsValue="2054개"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-sun text-danger" />} //pe-7s-umbrella : 우산
                statsText="날씨"
                statsValue="맑음 -10도"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="secificMap"
                title="따릉이 자전거 위치 및 현황"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <MapContainer shock={this.state.shock} stateData={this.state.stateData} location={this.state.location}></MapContainer>

                }
              />
            </Col>

            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                id="seoulMap"
                title="서울 지도"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <NewSeoul submit={this.handleSetState.bind(this)}></NewSeoul>
                }>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="따릉이 이용률 Top10"
                content={<ChartWithIndexLabel stateName={this.state.stateName} location={this.state.location}></ChartWithIndexLabel>}
              />
            </Col>

            <Col md={6}>
            <Card
                title="따릉이 사고 알림 서비스 현황"
                category="따릉이 충격량 감지 시 SNS 문자 알림 서비스 제공"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <SnsTable shock={this.state.shock}></SnsTable>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
