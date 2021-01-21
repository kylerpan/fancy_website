/* || Header */
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var resume = document.getElementsByClassName('drop-down-tabs')[0];

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

resume.onclick = function() {
    window.open("/assets/resume.pdf");
}

/* || Home */
var arrow = document.getElementById('arrow');
var inspiration = document.getElementById('inspiration');
var about_me_block_text = document.getElementById('about-me-block-text');
var gallery_block_text = document.getElementById('gallery-block-text');

arrow.onclick = function() {
    var top = parseInt(getComputedStyle(inspiration).getPropertyValue("top"));
    window.scrollTo(0, top - 100);
}

about_me_block_text.onclick = function() {
    window.location.href = "/about_me";
}

gallery_block_text.onclick = function() {
    window.location.href = "/gallery";
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
    window.scrollTo(0, 0);
}

footer_about_me.onclick = function() {
    window.location.href = "/about_me";
}

footer_gallery.onclick = function() {
    window.location.href = "/gallery";
}

footer_more.onclick = function() {
    console.log("hi");
}

footer_education.onclick = function() {
    window.location.href = "/about_me";
}

footer_hobbies.onclick = function() {
    window.location.href = "/about_me";
}

footer_projects.onclick = function() {
    window.location.href = "/about_me";
}

footer_portrait.onclick = function() {
    window.location.href = "/gallery";
}

footer_landscape.onclick = function() {
    window.location.href = "/gallery";
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