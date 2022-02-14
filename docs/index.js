//typing effect

var i = 0;
texts = [
    "Web",
    "Oyun",
    "Desktop"
];
var txtIndex = 0;
var txt = texts[txtIndex];
var OriSpeed = 300;
var speed = OriSpeed
var elementId = "demo";

function twWrite() {
    if (i < txt.length) {
        document.getElementById(elementId).innerHTML += txt.charAt(i);
        i++;
        if (speed > 100) {
            speed -= 50
        };
        setTimeout(twWrite, speed);
    } else if (i == txt.length) {
        speed = OriSpeed;
        //console.log("removing");
        setTimeout(twRemove, 2000)
    };
};

function twRemove() {
    if (i > -1) {
        document.getElementById(elementId).innerHTML = txt.slice(0, i);
        i--;
        if (speed > 100) {
            speed -= 50
        };
        setTimeout(twRemove, speed);
    } else if (i == -1) {
        speed = OriSpeed;
        txtIndex++;
        txt = texts[txtIndex % 3];
        twWrite();
    };
};

document.onload = twWrite();

//content loader
contents = [
    "home.html",
    "portfolio.html",
    "projects.html",
    "services.html",
    "blog.html",
    "contact.html"
];

function loadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
};

let activeBtn = document.getElementById("btn-0")
function goto(btn_no){
    let contDiv = document.getElementById('content');
    contDiv.innerHTML = loadPage("./contents/"+contents[btn_no]);
    //
    let btn = document.getElementById(`btn-${btn_no}`);
    btn.setAttribute("class","nav-link active");
    activeBtn.setAttribute("class","nav-link");
    activeBtn = btn;
};

goto(0);