// SHOW THE CORRESPONDING IMAGE WHEN THE ELEMENT IS HOVERED
const listItem = document.querySelectorAll(".description");
const riotImage = document.querySelector(".riotgames-click-image");
const imgContainer1 = document.getElementById("img-container1");
const imgContainer2 = document.getElementById("img-container2");

listItem.forEach(item => {
    item.addEventListener("mouseenter", function(){
        let imgUrl = item.getAttribute("data-img");
        imgContainer1.style.display = "none";
        imgContainer2.style.display = "none";
        const newImg = document.createElement("img");
        newImg.id = "newImg";
        newImg.src=imgUrl;
        newImg.style.width = "80%";
        riotImage.appendChild(newImg); 
    });
    item.addEventListener("mouseleave", function() {
        const displayImg = document.getElementById("newImg");
        if (displayImg) {
            displayImg.remove(); 
        }
        imgContainer1.style.display = "block";
        imgContainer2.style.display = "block";
    });
});

function displayRiotbar(){
    const section1 = document.querySelector("#section1");
    const riotClick = document.querySelector(".riotgames-click");
    riotClick.style.top = "0";
    section1.classList.add("dimmed");
}

function hideRiotbar(){
    const section1 = document.querySelector("#section1");
    const riotClick = document.querySelector(".riotgames-click");
    riotClick.style.top = "-100%";
    section1.classList.remove("dimmed");

}

//RESPONSIVE MENU HEADER
document.addEventListener("DOMContentLoaded", function(){
    const menu = document.querySelector(".riotgames-menu");
    const moreDropdown = document.querySelector(".dropdown-updatemenu");
    const moreMenuItem = document.querySelector(".more-dropdown");
    const universeItem = document.querySelector(".universe");
    const merchItem = document.querySelector(".merch");
    const supportItem = document.querySelector(".support");
    const discoverItem = document.querySelector(".discover");
    const esportsItem = document.querySelector(".esports");
    const patchItem = document.querySelector(".patch");
    function updateMenu(){
        if(window.innerWidth > 1400){
            if(universeItem.parentElement !== menu){
                menu.insertBefore(universeItem, moreMenuItem);
            }
        } else {
            if (!moreDropdown.contains(universeItem)) {
                moreDropdown.prepend(universeItem); 
            }
        }



        if(window.innerWidth > 1600){
            if(merchItem.parentElement !== menu){
                menu.insertBefore(merchItem, moreMenuItem);
            }
        } else {
            if (!moreDropdown.contains(merchItem)) {
                moreDropdown.prepend(merchItem); 
            }
        }


        if(window.innerWidth > 1800){
            if(supportItem.parentElement !== menu){
                menu.insertBefore(supportItem, moreMenuItem);
            }
            moreMenuItem.style.display = "none";
        } else {
            if (!moreDropdown.contains(supportItem)) {
                moreMenuItem.style.display = "flex";
                moreDropdown.prepend(supportItem); 
            }
        }

        if(window.innerWidth < 1200){
            if (!moreDropdown.contains(esportsItem)) {
                moreDropdown.prepend(esportsItem); 
            }
        } else {
            if(supportItem.parentElement !== menu){
                discoverItem.insertAdjacentElement("afterend", esportsItem);
            }
        }

        if(window.innerWidth < 1100){
            if (!moreDropdown.contains(discoverItem)) {
                moreDropdown.append(discoverItem); 
            }
        } else {
            if(discoverItem.parentElement !== menu){
                patchItem.insertAdjacentElement("afterend", discoverItem);
            }
        }
    }

    window.addEventListener("resize", updateMenu);
    updateMenu();
});


function clearInputSidebar(){
    const inputSidebar = document.getElementById("input-sidebar");
    inputSidebar.value ="";
}


function display_hide_NewsSidebar(){
    const newsIcon = document.querySelector("#news-icon");
    const newsClick = document.querySelector(".news-click");
    if(newsIcon.className == "fa-solid fa-caret-down"){
        newsClick.style.display = "flex";
        newsIcon.className = "fa-solid fa-caret-up";
    }
    else{
        newsClick.style.display = "none";
        newsIcon.className = "fa-solid fa-caret-down";
    }
}

function display_hide_DiscoverSidebar(){
    const discoverIcon = document.querySelector("#discover-icon");
    const discoverClick = document.querySelector(".discover-click");
    if(discoverIcon.className == "fa-solid fa-caret-down"){
        discoverClick.style.display = "flex";
        discoverIcon.className = "fa-solid fa-caret-up";
    }
    else{
        discoverClick.style.display = "none";
        discoverIcon.className = "fa-solid fa-caret-down";
    }
}

function exitSidebar(){
    const section1 = document.querySelector("#section1");
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    section1.classList.remove("dimmed");
}
function displaySidebar(){
    const section1 = document.querySelector("#section1");
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "block";
    section1.classList.add("dimmed");

}


//slide
document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
        const swiper1 = new Swiper('.swiper-1', {
            slidesPerView: 'auto',  
            spaceBetween: 15, 

            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });


        const swiper2 = new Swiper('.swiper-2', {
            slidesPerView: 4,  
            spaceBetween: 15, 

            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                1024: { slidesPerView: 5 },
                1450: {slidesPerView: 6}
            }
        });
    } else {
        console.error("Swiper chưa được load!");
    }
});



// SHOW THE CORRESPONDING IMAGE WHEN THE ELEMENT IS CLICK
const listItemIcon = document.querySelectorAll(".champion-icon");
const championImg = document.querySelector(".champion-img");
const championName = document.querySelector(".champion-name");
const championDescription = document.querySelector(".champion-description");

listItemIcon.forEach(item => {
    item.addEventListener("click", function(){
        let imgUrl = item.getAttribute("data-img");
        let name = item.getAttribute("data-name");
        let descriptionChampion = item.getAttribute("data-descript");
        setTimeout(() => {
            championImg.src = imgUrl;
            championName.innerText = name;
            championDescription.innerText = descriptionChampion;
        }, 200);

        listItemIcon.forEach(i => {
            i.querySelector(".champion-icon-name").style.color = ""; // Xóa màu cũ
        });

        // Đổi màu chữ của icon-name bên trong item được click
        item.querySelector(".champion-icon-name").style.color = "rgb(190, 124, 36)"; 
    });
});


// SHOW THE CORRESPONDING VIDEO WHEN THE ELEMENT IS CLICK
const listItemImg = document.querySelectorAll(".multiple-img-name");
const mulVid = document.querySelector(".multiple-ways-video"); 
const sourceTag = mulVid.querySelector("source");
const mulName = document.querySelector(".mul-name");
const mulDetail = document.querySelector(".mul-detail");
const multiple = document.querySelector(".multiple-ways");

listItemImg.forEach(item => {
    item.addEventListener("click", function(){
        let data = item.querySelector(".multiple-img");
        let vidSrc = data.getAttribute("data-video");
        let name = data.getAttribute("data-name");
        let detail = data.getAttribute("data-detail");
        let backgroundSrc = data.getAttribute("data-background");
        

        sourceTag.setAttribute("src", vidSrc);
        mulVid.load(); 
        mulName.innerText = name;
        mulDetail.innerText = detail;
        multiple.style.backgroundImage = `url(${backgroundSrc})`;

        listItemImg.forEach(i => {
            i.querySelector(".multiple-img").style.filter = "blur(1px)"; 
            i.querySelector(".multiple-name").style.color = "grey";
        });
        item.querySelector(".multiple-img").style.filter = "none"; 
        item.querySelector(".multiple-name").style.color = "white";

    });
});


function openNewTab() {
    window.open("http://127.0.0.1:5500/index.html", "_blank");
}