/* || Header */
var header_tabs = document.getElementsByClassName('header-tabs');
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');


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