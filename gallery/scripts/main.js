/* || Header */
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var resume = document.getElementsByClassName('drop-down-tabs')[0];


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

resume.onclick = function() {
    window.open("/assets/resume.pdf");
}


/* || Gallery */
var portrait_header = document.getElementById('portrait-header');
var landscape_header = document.getElementById('landscape-header');
var portraits_section = document.getElementById('portraits-section');
var landscapes_section = document.getElementById('landscapes-section');

portrait_header.onclick = function() {
    var top = parseInt(getComputedStyle(portraits_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

landscape_header.onclick = function() {
    var top = parseInt(getComputedStyle(landscapes_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}


/* || Footer */
var footer_logo = document.getElementById('footer-logo');
var footer_about_me = document.getElementById('footer-about-me');
var footer_gallery = document.getElementById('footer-gallery');
var footer_more = document.getElementById('footer-more');
var footer_education = document.getElementById('footer-education');
var footer_hobbies = document.getElementById('footer-hobbies');
var footer_projects = document.getElementById('footer-projects');
var footer_portrait = document.getElementById('footer-portrait');
var footer_landscape = document.getElementById('footer-landscape');
var github_icon = document.getElementById('github');
var facebook_icon = document.getElementById('facebook');
var instagram_icon = document.getElementById('instagram');

footer_logo.onclick = function() {
    window.location.href = "/index.html";
}

footer_about_me.onclick = function() {
    window.location.href = "/about_me";
}

footer_gallery.onclick = function() {
    window.scrollTo(0, 0);
}

footer_more.onclick = function() {
    console.log("hi");
}

footer_education.onclick = function() {
    window.location.href = "/about_me";
    if (document.readyState === "complete" || document.readyState === "interactive"){
        window.scroll(0, 1000);
    }
}

footer_hobbies.onclick = function() {
    window.location.href = "/about_me";
}

footer_projects.onclick = function() {
    window.location.href = "/about_me";
}

footer_portrait.onclick = function() {
    var top = parseInt(getComputedStyle(portraits_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

footer_landscape.onclick = function() {
    var top = parseInt(getComputedStyle(landscapes_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

github_icon.onclick = function() {
    window.open("https://github.com/kylerpan")
}

facebook_icon.onclick = function() {
    window.open("https://www.facebook.com/kyle.pan.735")
}

instagram_icon.onclick = function() {
    window.open("https://www.instagram.com/kyle_pan_/")
}
