/* || Header */
var logo = document.getElementById('logo');
var about_me = document.getElementById('about-me');
var gallery = document.getElementById('gallery');
var more = document.getElementById('more');
var resume = document.getElementsByClassName('drop-down-tabs')[0];
var github = document.getElementsByClassName('drop-down-tabs')[1];


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

resume.onclick = function() {
    window.open("/assets/resume.pdf");
}

github.onclick = function() {
    window.open("https://github.com/kylerpan");
}


/* || About Me */
var education_header = document.getElementById('education-header');
var hobbies_header = document.getElementById('hobbies-header');
var projects_header = document.getElementById('projects-header');
var education_group = document.getElementById('education-group');
var hobbies_group = document.getElementById('hobbies-group');
var projects_group = document.getElementById('projects-group');
var arrow = document.getElementById('arrow');
var notes = document.getElementById('notes');
var animated_block = document.getElementById('animated-block');

education_header.onclick = function() {
    var top = parseInt(getComputedStyle(education_group).getPropertyValue("top"));
    window.scrollTo(0, top - 100);
}

hobbies_header.onclick = function() {
    var top = parseInt(getComputedStyle(hobbies_group).getPropertyValue("top"));
    window.scrollTo(0, top - 100);
}

projects_header.onclick = function() {
    var top = parseInt(getComputedStyle(projects_group).getPropertyValue("top"));
    window.scrollTo(0, top - 100);
}

arrow.onclick = function() {
    var top = parseInt(getComputedStyle(notes).getPropertyValue("top"));
    window.scrollTo(0, top - 100);
}

animated_block.onclick = function() {
    window.open("https://github.com/kylerpan");
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
var footer_resume = document.getElementById('footer-resume');
var footer_back_to_top = document.getElementById('footer-back-to-top');
var github_icon = document.getElementById('github');
var facebook_icon = document.getElementById('facebook');
var instagram_icon = document.getElementById('instagram');

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
    var top = parseInt(getComputedStyle(education_group).getPropertyValue("top"));
    window.scrollTo(0, top - 100);
}

footer_hobbies.onclick = function() {
    var top = parseInt(getComputedStyle(hobbies_group).getPropertyValue("top"));
    window.scrollTo(0, top - 100);
}

footer_projects.onclick = function() {
    var top = parseInt(getComputedStyle(projects_group).getPropertyValue("top"));
    window.scrollTo(0, top - 100);
}

footer_portrait.onclick = function() {
    window.location.href = "/gallery";
}

footer_landscape.onclick = function() {
    window.location.href = "/gallery";
}

footer_resume.onclick = function() {
    window.open("/assets/resume.pdf");
}

footer_back_to_top.onclick = function() {
    window.scrollTo(0, 0);
}

github_icon.onclick = function() {
    window.open("https://github.com/kylerpan");
}

facebook_icon.onclick = function() {
    window.open("https://www.facebook.com/kyle.pan.735");
}

instagram_icon.onclick = function() {
    window.open("https://www.instagram.com/kyle_pan_/");
}
