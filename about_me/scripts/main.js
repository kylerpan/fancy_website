/* || Header */
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');


logo.onclick = function() {
    window.location.href = "/index.html";
}

about_me.onclick = function() {
    location.reload();
}

gallery.onclick = function() {
    window.location.href = "/gallery";
}

more.onclick = function() {
    console.log("hi");
}
