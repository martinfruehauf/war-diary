var daysThatHaveCoordinates = [
    { day: 1, coordinates: [{ lat: 54.409539, lng: 20.480892},]},
    { day: 4, coordinates: [{ lat: 54.390511, lng: 20.640833},]},
    { day: 14, coordinates: [{ lat: 54.383542, lng: 19.816714},]},
    { day: 28, coordinates: [{ lat: 54.466667, lng: 19.933333},]},
    { day: 35, coordinates: [{ lat: 54.466667, lng: 20.000000},]},
    { day: 66, coordinates: [{ lat: 54.633333, lng: 21.816667},
            { lat: 54.906667, lng: 21.925000},
            { lat: 54.961667, lng: 22.396111},]},
    { day: 76, coordinates: [{ lat: 54.920000, lng: 22.200000},]},
    { day: 78, coordinates: [{ lat: 54.906667, lng: 21.925000},
            { lat: 54.920000, lng: 22.200000},]},
    { day: 79, coordinates: [{ lat: 54.918333, lng: 22.078889},
            { lat: 54.941389, lng: 21.810611},]},
    { day: 80, coordinates: [{ lat: 54.880278, lng: 21.652778},
            { lat: 54.823000, lng: 21.348000},]},
    { day: 81, coordinates: [{ lat: 54.793333, lng: 21.239167},]},
    { day: 82, coordinates: [{ lat: 54.677833, lng: 20.976861},]},
    { day: 85, coordinates: [{ lat: 54.733194, lng: 20.707611},]},
    { day: 86, coordinates: [{ lat: 54.718333, lng: 20.600000},]},
    { day: 87, coordinates: [{ lat: 54.723000, lng: 20.548000},]},
    { day: 88, coordinates: [{ lat: 54.725722, lng: 20.526722},]},
    { day: 124, coordinates: [{ lat: 54.721083, lng: 20.491167},]},
    { day: 134, coordinates: [{ lat: 54.720667, lng: 20.499694},]},
    { day: 156, coordinates: [{ lat: 54.715278, lng: 20.459056},]},//////////
    { day: 160, coordinates: [{ lat: 54.866667, lng: 21.100000},]},
    { day: 161, coordinates: [{ lat: 54.650000, lng: 21.066667},]},
    { day: 162, coordinates: [{ lat: 54.880278, lng: 21.652778},]},
    { day: 163, coordinates: [{ lat: 55.051866, lng: 21.954591},]},
    { day: 173, coordinates: [{ lat: 55.252222, lng: 22.289722},]},
    { day: 260, coordinates: [{ lat: 55.928056, lng: 23.315000},]},
    { day: 276, coordinates: [{ lat: 56.005556, lng: 22.936111},]},
    { day: 290, coordinates: [{ lat: 56.005556, lng: 22.936111},
            { lat: 55.928056, lng: 23.315000},]},/////////
    { day: 324, coordinates: [{ lat: 54.886417, lng: 23.932167},]},
    { day: 325, coordinates: [{ lat: 54.640256, lng: 22.759144},
            { lat: 54.636757, lng: 22.733817},
            { lat: 54.628444, lng: 22.579111},
            { lat: 54.584861, lng: 22.198833},
            { lat: 54.628583, lng: 21.818806},]},
    { day: 328, coordinates: [{ lat: 54.172222, lng: 21.138528},
            { lat: 53.785639, lng: 20.498306},
            { lat: 53.699750, lng: 19.951306},
            { lat: 53.582222, lng: 19.573861},
            { lat: 53.000000, lng: 18.615333},]},
    { day: 330, coordinates: [{ lat: 53.135389, lng: 17.992694},
            { lat: 53.150000, lng: 16.733333},]},
    { day: 331, coordinates: [{ lat: 52.877722, lng: 16.018333},
            { lat: 52.727722, lng: 15.229389},
            { lat: 52.591750, lng: 14.647000},]},
    { day: 335, coordinates: [{ lat: 52.501500, lng: 13.477444},]},
    { day: 336, coordinates: [{ lat: 52.493889, lng: 13.497778},]},
    { day: 337, coordinates: [{ lat: 52.337361, lng: 14.546306},]},
    { day: 338, coordinates: [{ lat: 52.342833, lng: 14.503667},]},
    { day: 339, coordinates: [{ lat: 52.349389, lng: 14.549694},]},
    { day: 340, coordinates: [{ lat: 52.510222, lng: 13.435000},
            { lat: 52.433222, lng: 13.316417},
            { lat: 52.537806, lng: 13.142778},]},
    { day: 341, coordinates: [{ lat: 52.521806, lng: 13.414056},
            { lat: 52.503694, lng: 13.382611},
            { lat: 52.452389, lng: 13.272222},
            { lat: 52.537806, lng: 13.142778},]},
    { day: 343, coordinates: [{ lat: 52.594889, lng: 11.855583},
            { lat: 52.165972, lng: 11.658139},
            { lat: 52.150417, lng: 11.215028},
            { lat: 52.228056, lng: 11.010556},]},
    { day: 344, coordinates: [{ lat: 52.252250, lng: 10.540194},
            { lat: 52.159833, lng: 9.952111},
            { lat: 51.533889, lng: 9.935556},
            { lat: 51.371222, lng: 9.899917},
            { lat: 51.322444, lng: 9.459861},
            { lat: 51.230306, lng: 9.466667},
            { lat: 50.910472, lng: 9.185972},
            { lat: 50.819167, lng: 8.774972},]},
    { day: 345, coordinates: [{ lat: 50.579750, lng: 8.661972},
            { lat: 50.332528, lng: 8.761528},
            { lat: 50.121167, lng: 8.929694},]},
    { day: 346, coordinates: [{ lat: 50.108944, lng: 8.909806},
            { lat: 50.104528, lng: 8.909528},]},
]

var fighting = [];
for (let i = 0; i < daysThatHaveCoordinates.slice(0, 19).length; i++) {
    for(let j = 0; j < daysThatHaveCoordinates[i]["coordinates"].length; j ++) {
        fighting.push(daysThatHaveCoordinates[i]["coordinates"][j]);
    }
}
var imprisonment = [];
for (let i = 0; i < daysThatHaveCoordinates.slice(18, 25).length; i++) {
    for(let j = 0; j < daysThatHaveCoordinates.slice(18, 25)[i]["coordinates"].length; j ++) {
        imprisonment.push(daysThatHaveCoordinates.slice(18, 25)[i]["coordinates"][j]);
    }
}
var returning = [];
for (let i = 0; i < daysThatHaveCoordinates.slice(24, daysThatHaveCoordinates.length).length; i++) {
    for(let j = 0; j < daysThatHaveCoordinates.slice(24, daysThatHaveCoordinates.length)[i]["coordinates"].length; j ++) {
        returning.push(daysThatHaveCoordinates.slice(24, daysThatHaveCoordinates.length)[i]["coordinates"][j]);
    }
}
