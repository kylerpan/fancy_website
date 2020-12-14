/* || Header */
var header_tabs = document.getElementsByClassName('header-tabs');
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
