import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import NewSeoul from "components/seoulMap/newSeoul";
import { Prev } from 'react-bootstrap/lib/Pagination';
import 'components/specificMap/MapContainer.scss';

const { kakao } = window;

const MapContainer = (props) => {
  const [location, setLoc] = useState([]);
  const [selectedLocation, setSelectedLoc] = useState([]);
  const [stateName, setStateName] = useState('mapo');

  useEffect(() => {
    const loadlocation = async () => {
      axios
        .get(
          'https://yfjpq3vo26.execute-api.us-east-1.amazonaws.com/dev/location'
        )
        .then((data) => {
          setLoc(data.data);
          // setSelectedLoc(data.data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
    loadlocation();
  }, []);

  useEffect(() => {
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
    const customDisplayMarker = () => {
      console.log("customDisplayMarker");

      for (var i = 0; i < location.length; i++) {
        if (location[i].state == stateName) {
          makeMarker(location[i]);
        }
      }

      // // 지도 중심좌표를 접속위치로 변경합니다
      // map.setCenter(new kakao.maps.LatLng(selectedLocation[0].stationLatitude, selectedLocation[0].stationLongitude));

      function makeMarker(selectedLocation) {
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
        });

        // 커스텀 오버레이에 표시할 컨텐츠 입니다
        // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
        // 별도의 이벤트 메소드를 제공하지 않습니다 
        var content = 
          '<div class="wrap">' +
          '    <div class="info">' +
          '        <div class="title">' +
                    selectedLocation.stationId+"("+selectedLocation.state+")"+
          '        </div>' +
          '        <div class="body">' +
          '            <div class="img">' +
          '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70" alt="파이그래프">' +
          '           </div>' +
          '            <div class="desc">' +
          '                <div class="ellipsis">현재 거치율이라던가</div>' +
          '                <div class="jibun ellipsis">필요한 자전거대수라던가</div>' +
          '                <div>그외 정보들</div>' +
          '            </div>' +
          '        </div>' +
          '    </div>' +
          '</div>';

        var overlay = new kakao.maps.CustomOverlay({
          content: content,
          map: map,
          position: position     
      });

      overlay.setVisible(false);

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, overlay));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(overlay));
      }

      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
      function makeOverListener(map, marker, overlay) {
        return function() {
          overlay.setVisible(true);
            // overlay.setMap(map);
        };
      }

      // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
      function makeOutListener(overlay) {
        return function() {
          overlay.setVisible(false);
            // overlay.setMap(null);
        };
      }
    }

    customDisplayMarker();
  }, [stateName]);


  const handleSetState = function (state) {
    alert(state + "가 선택되었습니다.")
    setStateName(state);
  };

  console.log("MapContainer:", location);
  console.log("selectedLoc :", selectedLocation);
  console.log("stateName :", stateName);


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
