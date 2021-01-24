let map;
let markers = [];
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 54, lng: 20 },
        mapTypeId: "terrain",
    });
    var flightPlanCoordinates = [
        { lat: 54.409539, lng: 20.480892 },
        { lat: 54.390511, lng: 20.640833 },
        { lat: 54.383542, lng: 19.816714 },
        { lat: 54.466667, lng: 19.933333 },
    ];

    var flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    flightPath.setMap(map);

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
    marker.setMap(map);
    markers.push(marker);
}
