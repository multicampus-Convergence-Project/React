import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Card } from 'components/Card/Card.jsx';
import { getAddress } from 'views/api';

const TableList = props => {
  const [addressShock, setAddressShock] = useState([]);
  const [Steal, setSteal] = useState([]);

  useEffect(() => {
    //   const getShockData = () => {
    //     axios.get(apiEndpoint).then((res) => {
    //     setShock(res.data);
    //     console.log("getShockData:",res.data);
    //     getAddressHttpHandler(res.data);
    //   })
    //   getAddressHttpHandler(shock);
    // }

    const getAddressHttpHandler = async () => {
      console.log("shock length: ", props.shock.length);
      for (let i = 0; i < props.shock.length; i++) {
        // paramter 설정
        const params = {
          x: props.shock[i].longitude,
          y: props.shock[i].latitude
        };
        const { data } = await getAddress(params); // api 호출
        const test = data.documents;
        const realAddress = test[0].address.address_name;
        console.log("getAddressHttpHandler", realAddress); // 결과 호출
        // setAddressShock(...addressShock,realAddress);
        setAddressShock(addressShock => [...addressShock, realAddress]);
      }
    };

    const getStealHttpHandler = async () => {
      // console.log("shock length: ", props.shock.length);
      for (let i = 0; i < props.shock.length; i++) {
        // paramter 설정
        const params = {
          x: props.shock[i].longitude,
          y: props.shock[i].latitude
        };
        const { data } = await getAddress(params); // api 호출
        const test = data.documents;
        const realAddress = test[0].address.region_1depth_name+" "+test[0].address.region_2depth_name+" "+test[0].address.region_3depth_name;
        console.log("getStealHttpHandler", realAddress); // 결과 호출
        setSteal(Steal => [...Steal, realAddress]);
      }
    };

    getAddressHttpHandler();
    getStealHttpHandler();
  }, [props.shock]);

  console.log("addressShock", addressShock);

  return (
    <div>
      <Card
        title="따릉이 사고 알림 서비스 현황"
        category="따릉이 충격량 감지 시 SNS 문자 알림 서비스 제공"
        ctTableFullWidth
        ctTableResponsive
        
        content={
          <div>
            <Table striped hover>
            <thead>
              <tr>
                <th>발생일자</th>
                <th>충격량</th>
                <th>주소</th>
              </tr>
            </thead>
            <tbody>
              {props.shock.map((prop, key) => {
                return (
                  <tr key={key}>
                    <th>{prop.date}</th>
                    <th>{prop.shock}</th>
                    <td>{addressShock[key]}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <br></br>
          <div className='header'>
          <h4 className="title">도난 자전거 신고 현황</h4>
          <p className="category">도난 자전거 신고 리스트</p>
          <br></br>
          </div>
          <Table striped hover>
          <thead>
            <tr>
              <th>신고일자</th>
              <th>주소</th>
            </tr>
          </thead>
          <tbody>
            {Steal.map((prop, key) => {
              return (
                <tr key={key}>
                  <td>12/20/2020</td>	
                  <td>{Steal[key]}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
          </div>
        }
      />
    </div>
  );
};

export default TableList;
