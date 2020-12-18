import React, { useEffect,useState } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import {getAddress} from 'views/api';
import axios from "axios";

let apiEndpoint =
"https://sv6eie9w7a.execute-api.us-east-1.amazonaws.com/dev/rental-office";

let tempShock = [];

const TableList = props => {
  const [shock,setShock] = useState(["12/17/2020",1,37.509391, 127.055587,500]);
  const [addressShock,setAddressShock] = useState('');

  useEffect(() => {

    const getShockData = () => {
      axios.get(apiEndpoint).then((res) => {
      setShock(res.data);
      console.log("getShockData:",res.data);
      getAddressHttpHandler(res.data);
    })
    getAddressHttpHandler(shock);
  }
  
    const getAddressHttpHandler = async (shock) => {
      console.log("shock length: ",shock.length);
      for(let i=0;i<shock.length;i++){
        // paramter 설정
        const params = {
          x: shock[i].longitude,
          y: shock[i].latitude
        };
        const { data } = await getAddress(params); // api 호출
        const test = data.documents;
        console.log("getAddressHttpHandler",test[0].address,test[0].address.address_name); // 결과 호출
        setAddressShock(test[0].address.address_name);
      }
    };

    getShockData();
  }, []);

  console.log("tempShock",tempShock);
  console.log("shock",shock);
    return (
      <Table striped hover>
        <thead>
          <th>발생일자</th>
          <th>충격량</th>
          <th>주소</th>
        </thead>
        <tbody>
          {shock.map((prop, key) => {
            return (              
              <tr>
              <th>{prop.date}</th>
              <th>{prop.shock}</th>
              <td>{addressShock}</td>
              </tr>
              )
          })}
        </tbody>

      </Table>
    );
};

export default TableList;
