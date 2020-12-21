import React, { useEffect,useState } from "react";
import { Table } from "react-bootstrap";
import {getAddress} from 'views/api';

const TableList = props => {
  const [addressShock,setAddressShock] = useState([]);

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
      console.log("shock length: ",props.shock.length);
      for(let i=0;i<props.shock.length;i++){
        // paramter 설정
        const params = {
          x: props.shock[i].longitude,
          y: props.shock[i].latitude
        };
        const { data } = await getAddress(params); // api 호출
        const test = data.documents;
        const realAddress = test[0].address.address_name;
        console.log("getAddressHttpHandler",realAddress); // 결과 호출
        // setAddressShock(...addressShock,realAddress);
        setAddressShock(addressShock => [...addressShock, realAddress]);
      }
    };

    getAddressHttpHandler();
  }, [props.shock]);

  console.log("addressShock",addressShock);

    return (
      <Table striped hover>
        <thead>
          <th>발생일자</th>
          <th>충격량</th>
          <th>주소</th>
        </thead>
        <tbody>
          {props.shock.map((prop, key) => {
            return (              
              <tr>
              <th>{prop.date}</th>
              <th>{prop.shock}</th>
              <td>{addressShock[key]}</td>
              </tr>
              )
          })}
        </tbody>

      </Table>
    );
};

export default TableList;
