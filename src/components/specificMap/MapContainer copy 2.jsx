import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import NewSeoul from "components/seoulMap/newSeoul";
import { Prev } from 'react-bootstrap/lib/Pagination';

const { kakao } = window;

const MapContainer = (props) => {
  const [location, setLoc] = useState([]);
  const [selectedLocation, setSelectedLoc] = useState([]);
  const [stateName, setStateName] = useState('');

  useEffect(()=>{
    const loadlocation = async () => {
      axios
        .get(
          'https://yfjpq3vo26.execute-api.us-east-1.amazonaws.com/dev/location'
        )
        .then( (data) => {
          setLoc(data.data);
          // setSelectedLoc(data.data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
    loadlocation();
  },[]);

  useEffect(()=>{
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.53564880, 126.96362927), //지도의 중심좌표
      level: 8,
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    
    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  // 지도에 마커와 인포윈도우를 표시하는 함수
  const customDisplayMarker = () =>{
    console.log("customDisplayMarker");
    
    for (var i = 0; i < location.length; i++) {
      if(location[i].state == stateName){
        makeMarker(location[i]);
      }
    }
    
    // // 지도 중심좌표를 접속위치로 변경합니다
    // map.setCenter(new kakao.maps.LatLng(selectedLocation[0].stationLatitude, selectedLocation[0].stationLongitude));

    function makeMarker(selectedLocation){
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      var position = new kakao.maps.LatLng(selectedLocation.stationLatitude, selectedLocation.stationLongitude);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: position, // 마커를 표시할 위치
        title: selectedLocation.stationId, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        clickable: true
        // image: markerImage // 마커 이미지 
      });

      // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
      var iwContent = '<div class="wrap">' + 
      '<div class="info">' + 
      '<div class="title">' + 
      '카카오 스페이스닷원' + 
      '<div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
      '</div>' + 
      '<div class="body">' + 
      '<div class="img">' +
      '<img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
      '</div>' + 
      '<div class="desc">' + 
      '<div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
      '<div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
      '<div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
      '</div>' + 
      '</div>' + 
      '</div>' +    
      '</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
      
      var overlay = new kakao.maps.CustomOverlay({
        content: iwContent,
        map: map,
        position: position       
      });

      // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
      kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
      });

      // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
      function closeOverlay() {
        overlay.setMap(null);     
      }
    }
  }

  customDisplayMarker();
  },[stateName]);


  const handleSetState = function(state) {
    alert(state+"가 선택되었습니다.")
    setStateName(state);
};

  console.log("MapContainer:",location);
  console.log("selectedLoc :",selectedLocation);
  console.log("stateName :",stateName);


  return (
    <>
      <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div>
                    <div id="myMap" style={{
                    width: '960px',
                    height: '400px'
                    }}
                    ></div>
                  </div>
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
              <NewSeoul stateName={stateName} submit={handleSetState}></NewSeoul>
                }>
            </Card>
            </Col>
    </>
  );
};

export default MapContainer;
