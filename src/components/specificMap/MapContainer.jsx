/*global kakao */
import React, { useEffect } from 'react';
import 'components/specificMap/MapContainer.scss';

// const { kakao } = window;

const MapContainer = (props) => {

  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.5556488, 126.96362927), //지도의 중심좌표
      level: 7,
    };
  
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    const shockMarker = ()=>{
      for (var i = 0; i < props.shock.length; i++) {
        makeShockMarker(props.shock[i]);
      }
    };
    
    function makeShockMarker(selectedShock){
      console.log("makeShockMarker");

      // 마커 이미지의 이미지 주소입니다
      var imageSrcAlert = "https://user-images.githubusercontent.com/69428620/102606283-d8d2d780-4169-11eb-8096-23fba9cef614.png";
      var imageSrcShock = 'https://user-images.githubusercontent.com/69428620/102607550-d1acc900-416b-11eb-85b5-6bec80f0936d.png';
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(70, 65);

      // 마커 이미지를 생성합니다    
      var markerImageShock = new kakao.maps.MarkerImage(imageSrcShock, imageSize);
      var position = new kakao.maps.LatLng(selectedShock.latitude, selectedShock.longitude);

      var shockContent =
          '<div class="wrap">' +
          '    <div class="info">' +
          '        <div class="title">사고 발생 지역</div>' +
          '        <div class="body">' +
          '            <div class="img">' +
          '                <img src='+imageSrcAlert+' width="73" height="70" alt="사고발생">' +
          '           </div>' +
          '            <div class="desc">' +
          '                <div class="ellipsis">충격량:' + selectedShock.shock +'</div>' +
          '                <div>발생날짜 : ' + selectedShock.date + '</div>' +
          '            </div>' +
          '        </div>' +
          '    </div>' +
          '</div>';

      var shockMarker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: position, // 마커를 표시할 위치
        title: '사고 발생 지역', // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImageShock,
        clickable: true
      });

      shockMarker.setZIndex(1);

      var overlay = new kakao.maps.CustomOverlay({
        content: shockContent,
        map: map,
        position: position
      });
      
      overlay.setZIndex(2);
      overlay.setVisible(false);

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다 
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(shockMarker, 'mouseover', makeOverListener(map, shockMarker, overlay));
      kakao.maps.event.addListener(shockMarker, 'mouseout', makeOutListener(overlay));

      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, overlay) {
      return function () {
        overlay.setVisible(true);
        // overlay.setMap(map);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(overlay) {
      return function () {
        overlay.setVisible(false);
        // overlay.setMap(null);
      };
    }
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수
    const customDisplayMarker = () => {
      console.log("customDisplayMarker");

    // 마커 이미지의 이미지 주소입니다
    var imageSrcYellow = "https://user-images.githubusercontent.com/69428620/102439510-bbb2e180-4061-11eb-8d58-b40ece0073b3.png";
    var imageSrcRed = 'https://user-images.githubusercontent.com/69428620/102439516-bd7ca500-4061-11eb-95db-75aa538f6a67.png';
    var imageSrcGreen = 'https://user-images.githubusercontent.com/69428620/102439506-bb1a4b00-4061-11eb-8a01-301a1c595192.png';
    var imageSrcBike = 'https://user-images.githubusercontent.com/69428620/102715544-8d5f2b80-4319-11eb-9733-c40cf1fb263b.png';
    
      // // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(new kakao.maps.LatLng(props.stateData[2], props.stateData[3]));

      for (var i = 0; i < props.location.length; i++) {
        if (props.location[i].state === props.stateData[0]) {
          makeMarker(props.location[i]);
        }
      }

      function makeMarker(selectedLocation) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다    
        var markerImageYellow = new kakao.maps.MarkerImage(imageSrcYellow, imageSize);
        var markerImageRed = new kakao.maps.MarkerImage(imageSrcRed, imageSize);
        var markerImageGreen = new kakao.maps.MarkerImage(imageSrcGreen, imageSize);

        var position = new kakao.maps.LatLng(selectedLocation.stationLatitude, selectedLocation.stationLongitude);

        // 커스텀 오버레이에 표시할 컨텐츠 입니다
        // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
        // 별도의 이벤트 메소드를 제공하지 않습니다 
        var content =
          '<div class="wrap">' +
          '    <div class="info">' +
          '        <div class="title">' +
          selectedLocation.stationName +
          '        </div>' +
          '        <div class="body">' +
          '            <div class="img">' +
          '                <img src='+imageSrcBike+' width="73" height="70" alt="파이그래프">' +
          '           </div>' +
          '            <div class="desc">' +
          '                <div class="ellipsis">현재 사용가능:' + selectedLocation.parkingBikeTotCnt + '대/' + selectedLocation.rackTotCnt + '대('+selectedLocation.shared+'%)</div>' +
          '                <div>사용 가능한 예측 대수: ' + selectedLocation.predict + '(대)</div>' +
          '                <div  class="jibun ellipsis">StationId: ' + selectedLocation.stationId + '</div>' +
          '            </div>' +
          '        </div>' +
          '    </div>' +
          '</div>';
          
        if (selectedLocation.rackTotCnt < selectedLocation.predict) {
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: position, // 마커를 표시할 위치
            title: selectedLocation.stationName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImageYellow,
            clickable: true
          });
        } else if (selectedLocation.predict < selectedLocation.rackTotCnt *0.7) {
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: position, // 마커를 표시할 위치
            title: selectedLocation.stationName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImageRed,
            clickable: true
          });
        } else {
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: position, // 마커를 표시할 위치
            title: selectedLocation.stationName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImageGreen,
            clickable: true
          });
        }


        var overlay = new kakao.maps.CustomOverlay({
          content: content,
          map: map,
          position: position
        });
        overlay.setZIndex(2);
        overlay.setVisible(false);

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, overlay));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(overlay));
      }

      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, overlay) {
      return function () {
        overlay.setVisible(true);
        // overlay.setMap(map);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(overlay) {
      return function () {
        overlay.setVisible(false);
        // overlay.setMap(null);
      };
    }
    }

  

    shockMarker();
    if(props.stateData.length !== 0){
      customDisplayMarker();
    }

  });

  console.log("MapContainer:", props.location);

  return (
    <>
      <div>
        <div id="myMap" style={{
          width: '100%',
          height: '430px'
        }}
        ></div>
      </div>
    </>
  );
};

export default MapContainer;