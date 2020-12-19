/* || Header */
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var portrait_header = document.getElementById('portrait-header');
var landscape_header = document.getElementById('landscape-header');
var resume = document.getElementsByClassName('drop-down-tabs')[0];


logo.onclick = function() {
    window.location.href = "/index.html";
}

about_me.onclick = function() {
    window.location.href = "/about_me";
}

gallery.onclick = function() {
    location.reload();
}

more.onclick = function() {
    console.log("hi");
}

portrait_header.onclick = function() {
    window.scrollTo(0, 1300);
}

landscape_header.onclick = function() {
    window.scrollTo(0, 2520);
}

resume.onclick = function() {
    window.open("/assets/resume.pdf");
}

/* || Height of Website */
var body = document.getElementsByTagName('body')[0];

function resize_body(){
    body.style.height = "auto";
    var body_height = String(body.scrollHeight) + "px";
    body.style.height = body_height;
}