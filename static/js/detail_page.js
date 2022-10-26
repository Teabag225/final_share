var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.5474432, 126.9455146), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var markerPosition = new kakao.maps.LatLng(37.5474432, 126.9455146);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = '<div style="padding:5px;">을밀대 평양냉면! </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent
});

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);


// 커스텀 오버레이에 표시할 내용입니다
// HTML 문자열 또는 Dom Element 입니다
var content = '<div id="myDiv">' +
    ' <div class="product-list" id="product-list">' +
    '    <div class="row row-cols-2 row-cols-md-3 g-4">' +
    ' <div class="card" style="width: 18remv">' +
    // '    <a href="https://google.com">' +
    '<img src="./static/image/을밀대평양냉면.jpg" width="30%" height="40%" class="card-img-top"alt="을밀대평양냉면"/>' +
    '<div class="card-body">' +
    '<h5 class="card-title">옥면가</h5>' +
    ' <p class="card-text">' +
    '옥수수면을 사용한 칼국수와 일본라멘의 특징을 입혀 사골을' +
    '우려낸 진한 국수(옥면가)' +
    '</p>' +
    '</div>' +
    '<ul class="list-group list-group-flush">' +
    '<li class="list-group-item">' +
    '별점' +
    '<span class="fa fa-star checked"></span>' +
    '                            <span class="fa fa-star checked"></span>' +
    '                            <span class="fa fa-star checked"></span>' +
    '                            <span class="fa fa-star checked"></span>' +
    '<span class="fa fa-star checked"></span>' +
    '</li>' +
    '<li class="list-group-item">거리: 332m</li>' +
    '   <li class="list-group-item">평균 가격: 11,000</li>' +
    '                     </ul > ' +
    '</a > ' +
    '</div > ';


// 커스텀 오버레이가 표시될 위치입니다
var position = new kakao.maps.LatLng(37.5474432, 126.9455146);

// 커스텀 오버레이를 생성합니다 
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    xAnchor: -0.3,
    yAnchor: 0.91
});
