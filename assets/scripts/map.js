var map;
let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 52.895563, lng: 17.116324 },
        mapTypeId: "terrain",
    });

    var fightingPath = new google.maps.Polyline({
        path: fighting,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    var imprisonmentPath = new google.maps.Polyline({
        path: imprisonment,
        geodesic: true,
        strokeColor: "#FFFF00",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    var returningPath = new google.maps.Polyline({
        path: returning,
        geodesic: true,
        strokeColor: "#008000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    fightingPath.setMap(map);
    imprisonmentPath.setMap(map);
    returningPath.setMap(map);

    // Set initial marker
    setMarker(54.409539, 20.480892, 1);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

function setMarker(lat, lng, id) {
    var latLng = new google.maps.LatLng(lat, lng);

    var marker = new google.maps.Marker({
        position: latLng,
        label: id.toString(),
    });
    if(id == 0) {
        marker = new google.maps.Marker({
            position: latLng,
            label: "",
        });
    }
    marker.setMap(map);
    markers.push(marker);
}
