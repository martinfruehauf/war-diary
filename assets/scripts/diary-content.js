
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

        }
    };
    let url = "assets/content/json/entry" + id + ".json";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    pageId = id;
}
getEntry(1);
