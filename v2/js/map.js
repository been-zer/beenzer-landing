function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 35.717, lng: 139.731 },
  });

  const customIcon = "images/logo.jpg";
  const marker = new google.maps.Marker({
    position: { lat: 35.717, lng: 139.731 },
    map: map,
    icon: customIcon,
  });

  const image = "images/gifs/13.gif";
  const infoWindow = new google.maps.InfoWindow({
    content: `<img src="${image}" style="width:200px;height:200px;">`,
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}

window.initMap = initMap;
