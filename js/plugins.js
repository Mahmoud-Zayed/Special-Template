//////////////////*      javascript      *////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    // console.log('Local Storage Is Not Empaty You Can Set It On Root Now');
    // console.log(localStorage.getItem("color_option"));
    document.documentElement.style.setProperty('--main-color', mainColors);

    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        // Add Active Class On Element With Data-Color === To Local Storage Item
        if (element.dataset.color === mainColors) {
            // Add Class Active
            element.classList.add('active');
        }
    });
}

// Click On Toggle Class Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    // Toggle Class Fa-spin For Rotation On Self
    this.classList.toggle("fa-spin");
    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};

//Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
// Loop On All List Items
colorsLi.forEach(li => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {
        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);
        // Handel Active State
        handelActive(e);
    });
});

// Start Landing Page Element
let landingPage = document.querySelector(".landing-page");
// Get Array Of Images
let imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
setInterval(() => {
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imageArray.length);
    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("images/' + imageArray[randomNumber] + '")';
}, 3000);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Select Skills Selector
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    // Skills Offset Top 
    let skillsOffsetTop = ourSkills.offsetTop;
    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;
    // Window Height
    let windowHeight = this.innerHeight;
    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener("click", (e) => {
        // Create Overlay Element
        let overlay = document.createElement("div");
        // Add Class To Overlay
        overlay.className = "popup-overlay";
        // Append Overlay To The Body
        document.body.appendChild(overlay);
        // Create The Popup Element
        let popupBox = document.createElement("div");
        // Add Class To The Popup Box
        popupBox.className = "popup-box";
        if (img.alt !== null) {
            // Create Heading
            let imgHeading = document.createElement("h3");
            // Create Text For Heading 
            let imgText = document.createTextNode(img.alt);
            // Append The Text To The Heading
            imgHeading.appendChild(imgText);
            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
        };
        // Create The Image Element
        let popupImage = document.createElement("img");
        // Set Image Source 
        popupImage.src = img.src;
        // Add Image To Popup Box
        popupBox.appendChild(popupImage);
        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");
        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");
        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);
        // Add Class To Close Button
        closeButton.className = "close-button";
        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);
    });
});
// Close Popup 
document.addEventListener("click", function (e) {
    if (e.target.className == "close-button") {
        // Remove The Current Popup
        e.target.parentNode.remove();
        // Remove Overlay
        document.querySelector(".popup-overlay").remove();
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Select All Bullets And Links
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
// allBullets.forEach(bullet => {
//     bullet.addEventListener("click", (e) => {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth",
//         });
//     });
// });
const allLinks = document.querySelectorAll(".links a");
// allLinks.forEach(link => {

//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth",
//         });
//     });
// });

function scrollToSmoth(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};
scrollToSmoth(allBullets);
scrollToSmoth(allLinks);
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Handel Active State
function handelActive(ev) {
    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    // Add Active Class On Self
    ev.target.classList.add("active");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Reset Button
document.querySelector(".reset-option").onclick = function () {
    // localStorage.clear();
    localStorage.removeItem("color_option");
    // Reload Window
    window.location.reload();
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Toggle Menu
let toggleBtn = document.querySelector('.toggle-menu');
let theLinks = document.querySelector('.links');

toggleBtn.onclick = function (e) {
    //Stop Propagation
    e.stopPropagation();
    // Toggle Class "menu-active" On Button
    this.classList.toggle('menu-active');
    // Toggle Class "open" On Links
    theLinks.classList.toggle("open");
};
// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== theLinks) {
        // Check Of Menu Is Open
        if (theLinks.classList.contains("open")) {
            // Toggle Class "menu-active" On Button
            toggleBtn.classList.toggle('menu-active');
            // Toggle Class "open" On Links
            theLinks.classList.toggle("open");
        }
    }
});
// Stop Propagation On Menu
theLinks.onclick = function (e) {
    e.stopPropagation();
};
////////////////////////////////////////////////////////////////////////////////////////////////////////





//////////////////*      jquery      *////////////////
$(document).ready(function () {
    'use strict';

    // Nice Scroll
    $("body").niceScroll({
        cursorcolor:"var(--main-color)",
        cursorwidth:"13px",
        zindex: "99999",
        cursorborder: "0",
        cursorborderradius: "0%"
    });


    // Loading Screen
    $(".lod .lds-hourglass").fadeOut(2000, function () {
        $(this).parent().fadeOut(600, function () {
            $(this).remove();
        });
    });


});