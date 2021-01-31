var slider = document.getElementById("sliderId");
var day = document.getElementById("day");

var MAXDAYS = 36; //besser nicht hard coden eigentlich = 343
var days = [1, 4, 14, 28, 33, 36]; //Besser nicht hardcoden
var pageId;

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
                if(entry.footer[i]) {
                    text += "<sup>" + entry.footer[i].id + "</sup>";
                }
            }
            document.getElementById("text-content").innerHTML = text;

            //set footer
            let footer = "";
            for(let i = 0; i < entry.footer.length; i++) {
                footer += "<sup>" + entry.footer[i].id + "</sup>" + entry.footer[i].note +"<br>";
            }

            document.getElementById("footer").innerHTML = footer;

            //set coordinates
            if(map && entry.footer.length) {
                clearMarkers();
                for (let i = 0; i < entry.footer.length; i++) {
                    if(entry.footer[i].coordinates) {
                        setMarker(entry.footer[i].coordinates.lat, entry.footer[i].coordinates.lng, entry.footer[i].id);
                    }
                }
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

getEntry(1);
