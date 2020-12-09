/* || Header */
var header_tabs = document.getElementsByClassName('header-tabs');
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var gallery_outer = document.getElementById('gallery-outer');
var gallery_drop_down_outer = document.getElementById('gallery-drop-down-outer');
var gallery_drop_down = document.getElementById('gallery-drop-down');
var more_drop_down_outer = document.getElementById('more-drop-down-outer');
var more_drop_down = document.getElementById('more-drop-down');
var resume_tab = document.getElementsByClassName('drop-down-tabs')[2];
var inspiration_tab = document.getElementsByClassName('drop-down-tabs')[3];


logo.onclick = function() {
    location.reload();
}

about_me.onclick = function() {
    window.location.href = "/about_me";
}

gallery.onclick = function() {
    console.log("hi");
}

more.onclick = function() {
    console.log("hi");
}

// gallery.addEventListener("mouseover", function(event) {
//     gallery.innerHTML = "Gallery &and;";
//     // gallery_drop_down.style.top = "75px";
//     // gallery_drop_down.style.opacity = "100%";
//     // gallery_drop_down_outer.style.top = "75px";
//     var start = Date.now();
//     var timer = setInterval(function() {
//         var timePassed = Date.now() - start;
//         gallery_drop_down.style.top = timePassed / 2 + 'px';
//         gallery_drop_down.style.opacity = timePassed / 1.5 + "%";
//         if (timePassed > 150) {
//             gallery_drop_down.style.top = "75px";
//             gallery_drop_down.style.opacity = "100%";
//             gallery_drop_down_outer.style.top = "75px";
//             gallery_outer.style.top = "60px";
//             clearInterval(timer);
//         }
//     }, 20)
// }, false);

// gallery_outer.addEventListener("mouseover", function(event) {
//     gallery.innerHTML = "Gallery &and;";
//     gallery_drop_down.style.top = "75px";
//     gallery_drop_down.style.opacity = "100%";
//     gallery_drop_down_outer.style.top = "75px";
//     gallery_outer.style.top = "60px";
// }, false)

// gallery_drop_down_outer.addEventListener("mouseover", function(event) {
//     gallery.innerHTML = "Gallery &and;";
//     gallery_drop_down.style.top = "75px";
//     gallery_drop_down.style.opacity = "100%";
//     gallery_drop_down_outer.style.top = "75px";
//     gallery_outer.style.top = "60px";
// }, false)

// gallery_outer.addEventListener("mouseout", function(event) {
//     gallery.innerHTML = "Gallery &or;";
//     gallery_drop_down_outer.style.top = "-150px";
//     gallery_outer.style.top = "-170px";
//     // gallery_drop_down.style.top = "-130px";
//     // gallery_drop_down.style.opacity = "0%";
//     // gallery_drop_down_outer.style.top = "-150px";
//     var start = Date.now();
//     var timer = setInterval(function() {
//         var timePassed = Date.now() - start;
//         gallery_drop_down.style.top = 75 - timePassed / 2 + 'px';
//         gallery_drop_down.style.opacity = 100 - timePassed / 1.5 + "%";
//         if (timePassed > 150) {
//             gallery_drop_down.style.top = "-130px";
//             gallery_drop_down.style.opacity = "0%";
//             clearInterval(timer);
//         }
//     }, 20)
//     // setTimeout(function() {
//     //     var start = Date.now();
//     //     var timer = setInterval(function() {
//     //         var timePassed = Date.now() - start;
//     //         gallery_drop_down.style.top = 75 - timePassed / 2 + 'px';
//     //         gallery_drop_down.style.opacity = 100 - timePassed / 1.5 + "%";
//     //         gallery_drop_down_outer.style.top = "-150px";
//     //         gallery_outer.style.top = "-170px";
//     //         if (timePassed > 150) {
//     //             gallery_drop_down.style.top = "-130px";
//     //             gallery_drop_down.style.opacity = "0%";
//     //             clearInterval(timer);
//     //         }
//     //     }, 20)
//     // }, 200)
// }, false);

// gallery_drop_down_outer.addEventListener("mouseout", function(event) {
//     gallery.innerHTML = "Gallery &or;";
//     gallery_drop_down_outer.style.top = "-150px";
//     gallery_outer.style.top = "-170px";
//     // gallery_drop_down.style.top = "-130px";
//     // gallery_drop_down.style.opacity = "0%";
//     // gallery_drop_down_outer.style.top = "-150px";
//     var start = Date.now();
//     var timer = setInterval(function() {
//         var timePassed = Date.now() - start;
//         gallery_drop_down.style.top = 75 - timePassed / 2 + 'px';
//         gallery_drop_down.style.opacity = 100 - timePassed / 1.5 + "%";
//         if (timePassed > 150) {
//             gallery_drop_down.style.top = "-130px";
//             gallery_drop_down.style.opacity = "0%";
//             clearInterval(timer);
//         }
//     }, 20)
//     // setTimeout(function() {
//     //     var start = Date.now();
//     //     var timer = setInterval(function() {
//     //         var timePassed = Date.now() - start;
//     //         gallery_drop_down.style.top = 75 - timePassed / 2 + 'px';
//     //         gallery_drop_down.style.opacity = 100 - timePassed / 1.5 + "%";
//     //         gallery_drop_down_outer.style.top = "-150px";
//     //         gallery_outer.style.top = "-170px";
//     //         if (timePassed > 150) {
//     //             gallery_drop_down.style.top = "-130px";
//     //             gallery_drop_down.style.opacity = "0%";
//     //             clearInterval(timer);
//     //         }
//     //     }, 20)
//     // }, 200)
// }, false)

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

// more.addEventListener("mouseout", function(event) {
//     more.innerHTML = "More &or;";
//     more_drop_down.style.top = "-130px";
//     more_drop_down.style.opacity = "0%";
//     more_drop_down_outer.style.top = "-150px";
//     // var start = Date.now();
//     // var timer = setInterval(function() {
//     //     var timePassed = Date.now() - start;
//     //     more_drop_down.style.top = 90 - timePassed / 2 + 'px';
//     //     more_drop_down.style.opacity = 100 - timePassed / 1.8 + "%";
//     //     if (timePassed > 180) {
//     //         more_drop_down.style.top = "0px";
//     //         more_drop_down.style.opacity = "0%";
//     //         clearInterval(timer);
//     //     }
//     // }, 20)
// }, false);

// more_drop_down_outer.addEventListener("mouseout", function(event) {
//     more.innerHTML = "More &or;";
//     more_drop_down.style.top = "-130px";
//     more_drop_down.style.opacity = "0%";
//     more_drop_down_outer.style.top = "-150px";
// }, false)

resume_tab.addEventListener("mouseover", function(event) {
    resume_tab.style.color = "white";
}, false);
