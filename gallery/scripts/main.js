/* || Header */
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
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

resume.onclick = function() {
    window.open("/assets/resume.pdf");
}


/* || Gallery */
var portrait_header = document.getElementById('portrait-header');
var landscape_header = document.getElementById('landscape-header');

portrait_header.onclick = function() {
    window.scrollTo(0, 1300);
}

landscape_header.onclick = function() {
    window.scrollTo(0, 2520);
}


/* || Footer */
var footer_logo = document.getElementById('footer-logo');
var footer_about_me = document.getElementById('footer-about-me');
var footer_gallery = document.getElementById('footer-gallery');
var footer_more = document.getElementById('footer-more');

footer_logo.onclick = function() {
    window.location.href = "/index.html";
}

footer_about_me.onclick = function() {
    window.location.href = "/about_me";
}

footer_gallery.onclick = function() {
    window.scrollTo(0, 0);
}

footer_more.onclick = function() {
    console.log("hi");
}


/* || Height of Website */
// var body = document.getElementsByTagName('body')[0];

// function resize_body(){
//     body.style.height = "auto";
//     var body_height = String(body.scrollHeight) + "px";
//     body.style.height = body_height;
// }

// resize_body();