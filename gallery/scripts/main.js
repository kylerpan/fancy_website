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
var portraits_section = document.getElementById('portraits-section');
var landscapes_section = document.getElementById('landscapes-section');

portrait_header.onclick = function() {
    var top = parseInt(getComputedStyle(portraits_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

landscape_header.onclick = function() {
    var top = parseInt(getComputedStyle(landscapes_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}


/* || Footer */
var footer_logo = document.getElementById('footer-logo');
var footer_about_me = document.getElementById('footer-about-me');
var footer_gallery = document.getElementById('footer-gallery');
var footer_portrait = document.getElementById('footer-portrait');
var footer_landscape = document.getElementById('footer-landscape');
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

footer_portrait.onclick = function() {
    var top = parseInt(getComputedStyle(portraits_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

footer_landscape.onclick = function() {
    var top = parseInt(getComputedStyle(landscapes_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
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