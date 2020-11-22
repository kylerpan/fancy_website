/* || Header */
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var gallery_drop_down = document.getElementById('gallery-drop-down');
var more_drop_down = document.getElementById('more-drop-down');

gallery.onclick = function() {
    console.log("hi");
}

more.onclick = function() {
    console.log("hi");
}

gallery.addEventListener("mouseover", function(event) {
    gallery.innerHTML = "Gallery &and;";
    
    var start = Date.now();
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        gallery_drop_down.style.top = timePassed / 2 + 'px';
        gallery_drop_down.style.opacity = timePassed / 1.7 + "%";
        if (timePassed > 170) clearInterval(timer);
    }, 20)
}, false);

gallery.addEventListener("mouseout", function(event) {
    gallery.innerHTML = "Gallery &or;";
    
    var start = Date.now();
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        gallery_drop_down.style.top = 85 - timePassed / 2 + 'px';
        gallery_drop_down.style.opacity = 100 - timePassed / 1.7 + "%";
        if (timePassed > 170) clearInterval(timer);
    }, 20)
}, false);

more.addEventListener("mouseover", function(event) {
    more.innerHTML = "More &and;";

    var start = Date.now();
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        more_drop_down.style.top = timePassed / 2 + 'px';
        more_drop_down.style.opacity = timePassed / 1.7 + "%";
        if (timePassed > 170) clearInterval(timer);
    }, 20)
}, false);

more.addEventListener("mouseout", function(event) {
    more.innerHTML = "More &or;";

    var start = Date.now();
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        more_drop_down.style.top = 85 - timePassed / 2 + 'px';
        more_drop_down.style.opacity = 100 - timePassed / 1.7 + "%";
        if (timePassed > 170) clearInterval(timer);
    }, 20)
}, false);