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
        gallery_drop_down.style.opacity = timePassed / 1.8 + "%";
        if (timePassed > 180) {
            gallery_drop_down.style.top = "90px";
            gallery_drop_down.style.opacity = "100%";
            clearInterval(timer);
        }
    }, 20)
}, false);

if (gallery_drop_down.style.opacity == "100%") {
    gallery_drop_down.addEventListener("mouseover", function(event) {
        console.log("hi");
        gallery.innerHTML = "Gallery &and;";
        gallery_drop_down.style.top = "85px";
        gallery_drop_down.style.opacity = "100%";
    }, false)
}

gallery.addEventListener("mouseout", function(event) {
    gallery.innerHTML = "Gallery &or;";
    
    var start = Date.now();
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        gallery_drop_down.style.top = 90 - timePassed / 2 + 'px';
        gallery_drop_down.style.opacity = 100 - timePassed / 1.8 + "%";
        if (timePassed > 180) {
            gallery_drop_down.style.top = "90px";
            gallery_drop_down.style.opacity = "0%";
            clearInterval(timer);
        }
    }, 20)
}, false);

more.addEventListener("mouseover", function(event) {
    more.innerHTML = "More &and;";

    var start = Date.now();
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        more_drop_down.style.top = timePassed / 2 + 'px';
        more_drop_down.style.opacity = timePassed / 1.8 + "%";
        if (timePassed > 180) {
            more_drop_down.style.top = "90px";
            more_drop_down.style.opacity = "100%";
            clearInterval(timer);
        }
    }, 20)
}, false);

more.addEventListener("mouseout", function(event) {
    more.innerHTML = "More &or;";

    var start = Date.now();
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        more_drop_down.style.top = 90 - timePassed / 2 + 'px';
        more_drop_down.style.opacity = 100 - timePassed / 1.8 + "%";
        if (timePassed > 180) {
            more_drop_down.style.top = "0px";
            more_drop_down.style.opacity = "0%";
            clearInterval(timer);
        }
    }, 20)
}, false);