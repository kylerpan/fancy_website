/* || Header */
var gallery = document.getElementsByClassName('gallery')[0];
var more = document.getElementsByClassName('more')[0];
var gallery_drop_down = document.getElementsByClassName('gallery-drop-down')[0];
var more_drop_down = document.getElementsByClassName('more-drop-down')[0];

gallery.onclick = function() {
    console.log("hi");
}

gallery.addEventListener("mouseover", function(event) {
    gallery_drop_down.style.display = "block";
}, false);

gallery.addEventListener("mouseout", function(event) {
    gallery_drop_down.style.display = "none";
}, false);

more.onclick = function() {
    console.log("hi");
}

more.addEventListener("mouseover", function(event) {
    more_drop_down.style.display = "block";
}, false);

more.addEventListener("mouseout", function(event) {
    more_drop_down.style.display = "none";
}, false);