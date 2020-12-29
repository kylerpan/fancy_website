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

/* || About Me */
var education_header = document.getElementById('education-header');
var hobbies_header = document.getElementById('hobbies-header');
var projects_header = document.getElementById('projects-header');
var education_section = document.getElementById('education-section');
var hobbies_section = document.getElementById('hobbies-section');
var projects_section = document.getElementById('projects-section');

education_header.onclick = function() {
    var top = parseInt(getComputedStyle(education_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

hobbies_header.onclick = function() {
    var top = parseInt(getComputedStyle(hobbies_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

projects_header.onclick = function() {
    var top = parseInt(getComputedStyle(projects_section).getPropertyValue("top"));
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

footer_logo.onclick = function() {
    window.location.href = "/index.html";
}

footer_about_me.onclick = function() {
    window.scrollTo(0, 0);
}

footer_gallery.onclick = function() {
    window.location.href = "/gallery";
}

footer_more.onclick = function() {
    console.log("hi");
}

footer_education.onclick = function() {
    var top = parseInt(getComputedStyle(education_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

footer_hobbies.onclick = function() {
    var top = parseInt(getComputedStyle(hobbies_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

footer_projects.onclick = function() {
    var top = parseInt(getComputedStyle(projects_section).getPropertyValue("top"));
    window.scrollTo(0, top + 100);
}

footer_portrait.onclick = function() {
    window.location.href = "/gallery";
}

footer_landscape.onclick = function() {
    window.location.href = "/gallery";
}
