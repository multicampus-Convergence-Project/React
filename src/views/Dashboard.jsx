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
      stateName: '',
      fixedClasses: 'dropdown show-dropdown open',
    };
    this.handleSetState = this.handleSetState.bind(this);
  }

  componentDidMount() {
    this._dbTest();
  }
  apiEndpoint =
    "https://yfjpq3vo26.execute-api.us-east-1.amazonaws.com/dev/location";
  _dbTest = async () => {
    await axios.get(this.apiEndpoint).then((res) => {
      // const location = res.data;
      // dataAll = res.data;
      this.setState({ location: res.data });
      this.setState({ location2: res.data.slice(0, 10) });
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
    console.log("Dashboard:", this.state.location);
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
                title="Specific SeoulMap"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <MapContainer stateData={this.state.stateData} location={this.state.location}></MapContainer>

                }
              />
            </Col>

            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                id="seoulMap"
                title="Seoul Map"
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
                content={<ChartWithIndexLabel stateName={this.state.stateName} location={this.state.location2}></ChartWithIndexLabel>}
              />
            </Col>

            <Col md={6}>
            <Card
                title="따릉이 사고 알림 서비스 현황"
                category="따릉이 충격량 감지 시 SNS 문자 알림 서비스 제공"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <SnsTable stateData={this.state.stateData} location={this.state.location2}></SnsTable>
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
