/* || Header */
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var portrait_header = document.getElementById('portrait-header');
var landscape_header = document.getElementById('landscape-header');


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