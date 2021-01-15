
console.log("diary-content.js");

const MAXDAYS = 343; //besser nicht hard coden
let pageId;
document.getElementById("button-next").addEventListener('click', function() {
    if(pageId<MAXDAYS) {
        getEntry(pageId+1)
    }
} );
document.getElementById("button-previous").addEventListener('click', function() {
    if(pageId>0) {
        getEntry(pageId-1)
    }
} );

function getEntry(id) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var entry = JSON.parse(this.responseText).entry;
            document.getElementById("date").innerHTML = entry[id].date;
            document.getElementById("text-content").innerHTML = entry[id].text;
            document.getElementById("footer").innerHTML = entry[id].footer;
            }
    };
    xmlhttp.open("GET", "assets/full_diary.json", true);
    xmlhttp.send();
    pageId = id;
}

getEntry(0);

