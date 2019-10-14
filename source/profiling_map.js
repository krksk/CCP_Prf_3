var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new daum.maps.LatLng(37.08500, 127.00000), // 지도의 중심좌표
        level: 9, // 지도의 확대 레벨
        mapTypeId : daum.maps.MapTypeId.HYBRID
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
    {
        content: '<div>1차 : 1998년 9월, 경기도 평택시 안중읍 안중리, S병원 뒤편 공영주차장 차량 트렁크에 유 모씨(49) 결박된 채로 방화 살해</div>',
        latlng: new daum.maps.LatLng(36.98657, 126.87716)
    },
    {
        content: '<div>2차 : 1999년 2월 13일, 경기도 평택시 도일동, pm 10:10, 버스에서 내린 송 모씨(19, 평택시 도일동 거주)가 행방불명 <br> 8차 : 2002년 9월, 경기도 평택시 도일동, 마을 입구 버스정류장에서 내린 전 모씨(42, 평택시 도일동 거주) 귀가중 실종 → 2003년 5월 인근 농경지에서 부패된 변사체로 발견</div>',
        latlng: new daum.maps.LatLng(37.05219, 127.11093)
    },
    {
        content: '<div>3차 : 1999년 11월 23일, 경기도 평택시 포승면 도곡5리, 야산 진입로에 최 모씨(22, 평택시 포승면 거주)가 강간당한 뒤 살해된 채로 발견</div>',
        latlng: new daum.maps.LatLng(36.98703, 126.93303)
    },
    {
        content: '<div>4차 : 2000년 8월 31일, 경기도 평택시 비전2동, S아파트에서 황 모씨(69)가 자신의 집 넥타이에 목이 메여 숨진채 발견, 입과 코가 막혀 질식사</div>',
        latlng: new daum.maps.LatLng(36.99042, 127.11028)
    },
    {
        content: '<div>5차 : 2000년 12월 14일, 경기도 평택시 서정·장당동, 홍 모씨(30), 자신의 집에서 전선에 결박된 채 목졸려 살해</div>',
        latlng: new daum.maps.LatLng(37.06143, 127.06290)
    },
    {
        content: '<div>6차 : 2001년 7월 25일, 경기도 평택시 장당동, 최 모씨(70, 평택시 장당동 거주), 자신의 집에서 흉기로 머리 등 찔린 채 살해되어 발견</div>',
        latlng: new daum.maps.LatLng(37.04809, 127.06426)
    },
    {
        content: '<div>7차 : 2002년 7월 24일, 경기도 평택시 안중읍, 임 모씨(75) 자신의 집에서 목졸려 살해된 뒤 방화</div>',
        latlng: new daum.maps.LatLng(36.99709, 126.93785)
    },
    {
        content: '<div>9차 : 2005년 3월 12일, 경기도 평택시 팽성읍, A아파트 앞에서 이 아파트에 사는 공 모양(16)이 실종</div>',
        latlng: new daum.maps.LatLng(36.96566, 127.06239)
    },
    {
        content: '<div>추가 : 2004년 10월 27일, 경기도 화성시 봉담읍 와우리, 노 모양 봉담읍 와우리공단 하차를 마지막으로 실종 → 정남면 보통리 야산 일대에서 변사체로 발견</div>',
        latlng: new daum.maps.LatLng(37.20491, 126.96837)
    }
];

for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new daum.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new daum.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    daum.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    daum.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
