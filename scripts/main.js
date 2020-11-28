/* || Header */
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var gallery_drop_down_outer = document.getElementById('gallery-drop-down-outer');
var gallery_drop_down = document.getElementById('gallery-drop-down');
var more_drop_down_outer = document.getElementById('more-drop-down-outer');
var more_drop_down = document.getElementById('more-drop-down');

gallery.onclick = function() {
    console.log(typeof gallery_drop_down.style.opacity);
}

more.onclick = function() {
    console.log("hi");
}

gallery.addEventListener("mouseover", function(event) {
    gallery.innerHTML = "Gallery &and;";
    gallery_drop_down.style.top = "75px";
    gallery_drop_down.style.opacity = "100%";
    gallery_drop_down_outer.style.top = "75px";
    // var start = Date.now();
    // var timer = setInterval(function() {
    //     var timePassed = Date.now() - start;
    //     gallery_drop_down.style.top = timePassed / 2 + 'px';
    //     gallery_drop_down.style.opacity = timePassed / 1.8 + "%";
    //     if (timePassed > 180) {
    //         gallery_drop_down.style.top = "90px";
    //         gallery_drop_down.style.opacity = "100%";
    //         clearInterval(timer);
    //     }
    // }, 20)
}, false);

gallery_drop_down_outer.addEventListener("mouseover", function(event) {
    gallery.innerHTML = "Gallery &and;";
    gallery_drop_down.style.top = "75px";
    gallery_drop_down.style.opacity = "100%";
    gallery_drop_down_outer.style.top = "75px";
}, false)

gallery.addEventListener("mouseout", function(event) {
    gallery.innerHTML = "Gallery &or;";
    gallery_drop_down.style.top = "-130px";
    gallery_drop_down.style.opacity = "0%";
    gallery_drop_down_outer.style.top = "-150px";
    // var start = Date.now();
    // var timer = setInterval(function() {
    //     var timePassed = Date.now() - start;
    //     gallery_drop_down.style.top = 90 - timePassed / 2 + 'px';
    //     gallery_drop_down.style.opacity = 100 - timePassed / 1.8 + "%";
    //     if (timePassed > 180) {
    //         gallery_drop_down.style.top = "90px";
    //         gallery_drop_down.style.opacity = "0%";
    //         clearInterval(timer);
    //     }
    // }, 20)
}, false);

gallery_drop_down_outer.addEventListener("mouseout", function(event) {
    console.log("hi")
    gallery.innerHTML = "Gallery &or;";
    gallery_drop_down.style.top = "-130px";
    gallery_drop_down.style.opacity = "0%";
    gallery_drop_down_outer.style.top = "-150px";
}, false)

more.addEventListener("mouseover", function(event) {
    more.innerHTML = "More &and;";
    more_drop_down.style.top = "75px";
    more_drop_down.style.opacity = "100%";
    more_drop_down_outer.style.top = "75px";
    // var start = Date.now();
    // var timer = setInterval(function() {
    //     var timePassed = Date.now() - start;
    //     more_drop_down.style.top = timePassed / 2 + 'px';
    //     more_drop_down.style.opacity = timePassed / 1.8 + "%";
    //     if (timePassed > 180) {
    //         more_drop_down.style.top = "90px";
    //         more_drop_down.style.opacity = "100%";
    //         clearInterval(timer);
    //     }
    // }, 20)
}, false);

more_drop_down_outer.addEventListener("mouseover", function(event) {
    more.innerHTML = "More &and;";
    more_drop_down.style.top = "75px";
    more_drop_down.style.opacity = "100%";
    more_drop_down_outer.style.top = "75px";
}, false)

more.addEventListener("mouseout", function(event) {
    more.innerHTML = "More &or;";
    more_drop_down.style.top = "-130px";
    more_drop_down.style.opacity = "0%";
    more_drop_down_outer.style.top = "-150px";
    // var start = Date.now();
    // var timer = setInterval(function() {
    //     var timePassed = Date.now() - start;
    //     more_drop_down.style.top = 90 - timePassed / 2 + 'px';
    //     more_drop_down.style.opacity = 100 - timePassed / 1.8 + "%";
    //     if (timePassed > 180) {
    //         more_drop_down.style.top = "0px";
    //         more_drop_down.style.opacity = "0%";
    //         clearInterval(timer);
    //     }
    // }, 20)
}, false);

more_drop_down_outer.addEventListener("mouseout", function(event) {
    more.innerHTML = "More &or;";
    more_drop_down.style.top = "-130px";
    more_drop_down.style.opacity = "0%";
    more_drop_down_outer.style.top = "-150px";
}, false)
