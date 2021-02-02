var slider = document.getElementById("sliderId");
var day = document.getElementById("day");

var days = [1,4,14,28,33,35,52,54,55,59,60,65,66,75,76,77,78,79,80,81,82,85,86,87,88,118,122,124,129,130,131,133,134,137,138,139,152,155,156,157,158,159,160,161,162,163,164,173,174,175,176,177,178,179,180,181,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,221,222,225,226,227,228,229,230,231,232,236,240,243,246,247,248,249,250,258,259,260,264,266,267,270,271,274,275,276,277,278,279,280,286,287,288,289,290,291,292,293,294,295,298,302,303,305,312,314,316,319,320,321,322,323,324,325,328,329,330,331,334,335,336,337,338,339,340,341,342,343,344,345,346]; //Besser nicht hardcoden
var MAXDAYS = days[days.length-1];
var pageId;

let footnotesActive = true;
let mapActive = true;
let sourcesActive = false;

$(function(){
    $('.btn-preface').click(function(){
            $('.cover').addClass('hide');
            $('.entries').addClass('hide');
            $('.preface').removeClass('hide');
        })
});

$(function(){
    $('.btn-cover').click(function(){
        $('.preface').addClass('hide');
        $('.entries').addClass('hide');
        $('.cover').removeClass('hide');
    })
});

$(function(){
    $('.btn-entries').click(function(){
        $('.preface').addClass('hide');
        $('.cover').addClass('hide');
        $('.entries').removeClass('hide');
    })
});

$(function(){

    $('#footnotes-btn').click(function(){
        if(footnotesActive) {
            $(this).addClass('btn-outline-secondary');
            $(this).removeClass('btn-secondary');
            $('#sources-btn').addClass('hide');
            $('#footer').addClass('hide');
            $('sup').addClass('hide');
            footnotesActive = false;
        }else {
            $(this).addClass('btn-secondary');
            $(this).removeClass('btn-outline-secondary');
            $('#sources-btn').removeClass('hide');
            $('#footer').removeClass('hide');
            $('sup').removeClass('hide');
            footnotesActive = true;
        }
    });
});

$(function(){
    $('#sources-btn').click(function(){
        if(sourcesActive) {
            $(this).addClass('btn-outline-secondary');
            $(this).removeClass('btn-secondary');
            $('.sources').addClass('hide');
            sourcesActive = false;
        }else {
            $(this).addClass('btn-secondary');
            $(this).removeClass('btn-outline-secondary');
            $('.sources').removeClass('hide');
            sourcesActive = true;
        }
    });
});

$(function(){
    $('#map-btn').click(function(){
        if(mapActive) {
            $('#map').addClass('hide');
            mapActive = false;
        }else {
            $('#map').removeClass('hide');
            mapActive = true;
        }
    });
});

//Buttons
document.getElementById("button-next").addEventListener('click', function() {
    if(parseInt(day.textContent) < MAXDAYS) { //const MAXDAYS führte zu Uncaught SyntaxError: Identifier 'MAXDAYS' has already been declared
        getEntry(pageId+1)
    }
    for(let i = 0; i < days.length; i++) {
        if(days[i] == slider.value && i < (days.length - 1)) {
            slider.value = days[i+1];
            day.innerHTML = days[i+1].toString();
            break;
        }
    }
} );

document.getElementById("button-previous").addEventListener('click', function() {
    if(parseInt(day.textContent) > 1) {
        getEntry(pageId-1)
    }
    for(let i = 0; i < days.length; i++) {
        if(days[i] == slider.value && i > 0) {
            slider.value = days[i-1];
            day.innerHTML = days[i-1].toString();
            break;
        }
    }
} );

function getPreviousCoordinates(daysThatHaveCoordinates, day) {
    for(let i = 0; i < daysThatHaveCoordinates.length; i++) {
        if(daysThatHaveCoordinates[i]["day"] < day && daysThatHaveCoordinates[i+1]["day"] >= day) {
            return daysThatHaveCoordinates[i]["coordinates"][daysThatHaveCoordinates[i]["coordinates"].length-1];
        }
    }
}

function getEntry(id) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var entry = JSON.parse(this.responseText);

            //set date
            let date_text;
            if(entry.date.length == 1) {
                date_text = entry.date[0];
            }else{
                date_text = entry.date[0] + " - " + entry.date[1];
            }
            document.getElementById("date").innerHTML = date_text;

            //set text
            let text = "";
            for(let i = 0; i < entry.text.length; i++) {
                text += entry.text[i];
                if(entry.footer[i] && footnotesActive) {
                    text += "<sup class='footerSup'>" + entry.footer[i].id + "</sup>";
                } else if(entry.footer[i]) {
                    text += "<sup class='footerSup hide'>" + entry.footer[i].id + "</sup>";
                }
            }
            document.getElementById("text-content").innerHTML = text;

            //set footer
            let footer = "";
            for(let i = 0; i < entry.footer.length; i++) {
                if(footnotesActive) {
                    footer += "<sup class='footerSup'>" + entry.footer[i].id + "</sup>" + entry.footer[i].note +"<br>";
                } else {
                    footer += "<sup class='footerSup hide'>" + entry.footer[i].id + "</sup>" + entry.footer[i].note +"<br>";
                }

                //set sources/links
                let sourceText = "";
                if(entry.footer[i].links && entry.footer[i].links.length>1) {
                    sourceText = "<i>Quellen: ";
                    for(let j = 0; j < entry.footer[i].links.length; j++) {
                        sourceText += "<a href='" + entry.footer[i].links[j] + "' target='_blank'>" + entry.footer[i].links[j];
                        if(j < entry.footer[i].links.length - 1) {
                            sourceText += ", </a>";
                        } else {
                            sourceText += "</a>";
                        }
                    }
                    sourceText += "</i>";
                } else if (entry.footer[i].links){
                    sourceText = "<i>Quelle: " + "<a href='" + entry.footer[i].links[0] + "' target='_blank'>" + entry.footer[i].links[0] + "</a></i>";
                }
                if(sourcesActive) {
                    footer += "<p class='sources'>" + sourceText + "</p>";
                }else {
                    footer += "<p class='sources hide'>" + sourceText + "</p>";
                }
            }
            document.getElementById("footer").innerHTML = footer;

            //set coordinates
            //find out if FOOTER has coordinates AT ALL
            var hasCoordinates = false;
            if(entry.footer.length) {
                for (let i = 0; i < entry.footer.length; i++) {
                    if (entry.footer[i].coordinates) {
                        hasCoordinates = true;
                        break;
                    }
                }
            }
            if(hasCoordinates) {
                clearMarkers();
                for (let i = 0; i < entry.footer.length; i++) {
                    if(entry.footer[i].coordinates) {
                        setMarker(parseFloat(entry.footer[i].coordinates.lat), parseFloat(entry.footer[i].coordinates.lng), entry.footer[i].id);
                    }
                }
            } else {
                clearMarkers()
                let previousCoordinates = getPreviousCoordinates(daysThatHaveCoordinates, entry.day);
                setMarker(previousCoordinates.lat, previousCoordinates.lng, 0);

            }
            hasCoordinates = false;

            //Change status
            let statusClass = document.getElementsByClassName("status");
            if(entry.day < 158) {
                statusClass[0].className = "status status-fight";
                statusClass[0].textContent = "Gefecht";
                statusClass[1].className = "status status-fight";
                statusClass[1].textContent = "Gefecht";
            } else if(158 <= entry.day && entry.day < 323) {
                statusClass[0].className = "status status-prison";
                statusClass[0].textContent = "Gefangenschaft";
                statusClass[1].className = "status status-prison";
                statusClass[1].textContent = "Gefangenschaft";
            } else {
                statusClass[0].className = "status status-return";
                statusClass[0].textContent = "Heimkehr";
                statusClass[1].className = "status status-return";
                statusClass[1].textContent = "Heimkehr";
            }

        }
    };
    let url = "assets/content/json/entry" + id + ".json";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    pageId = id;
}

// Slider : works either with input or onchange. oninput offers better ui experience, but results in loads of http requests
slider.onchange = function() {
    let tempDays = 0;
    let tempArrId = 0;
    for(let i = 0; i < days.length; i++) {
        if(i > 0 && (this.value > days[i - 1]) && (this.value <= days[i])) {
            if((this.value - days[i-1]) < (days[i]) - this.value) {
                tempDays = days[i-1];
                tempArrId = i - 1;
            }
            else{
                tempDays = days[i];
                tempArrId = i;
            }
        }
    }
    this.value = tempDays;
    day.innerHTML = this.value;
    getEntry(tempArrId+1);
}

setTimeout(() => {  getEntry(1); }, 1000);