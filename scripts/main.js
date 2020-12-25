/* || Header */
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');


logo.onclick = function() {
    location.reload();
}

about_me.onclick = function() {
    window.location.href = "/about_me";
}

gallery.onclick = function() {
    window.location.href = "/gallery";
}

more.onclick = function() {
    console.log("hi");
}

/* || Footer */
var footer_logo = document.getElementById('footer-logo');
var footer_about_me = document.getElementById('footer-about-me');
var footer_gallery = document.getElementById('footer-gallery');
var footer_portrait = document.getElementById('footer-portrait');
var footer_landscape = document.getElementById('footer-landscape');
var footer_more = document.getElementById('footer-more');

footer_logo.onclick = function() {
    window.scrollTo(0, 0);
}

footer_about_me.onclick = function() {
    window.location.href = "/about_me";
}

footer_gallery.onclick = function() {
    window.location.href = "/gallery";
}

footer_portrait.onclick = function() {
    window.location.href = "/gallery";
    window.scrollTo(0, 1300);
}

footer_landscape.onclick = function() {
    window.location.href = "/gallery";
    window.scrollTo(0, 2520);
}

footer_more.onclick = function() {
    console.log("hi");
}
