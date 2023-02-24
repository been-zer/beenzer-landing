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

  const video = `<video autoplay loop class="beenbon"
                  style="width:200px;height:200px;">
                  <source
                    src="./videos/13.mp4"
                    type="video/mp4">
                  Your browser does not support the
                  video
                  tag.
                </video>`;
  const infoWindow = new google.maps.InfoWindow({
    content: video,
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}

window.initMap = initMap;
