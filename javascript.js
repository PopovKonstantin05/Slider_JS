let images = [
    {
        name: "Rostov-on-Don, Admiral",
        url: "images/image_1.png",
        city: "Rostov-on-Don LCD admiral",
        area: "81 m2",
        time: "3.5 months"
    },
    {
        name: "Sochi Thieves",
        url: "images/image_2.png",
        city: "Sochi Thieves",
        area: "105 m2",
        time: "4 months"
    },
    {
        name: "Rostov-on-Don Patriotic",
        url: "images/image_3.png",
        city: "Rostov-on-Don Patriotic",
        area: "93 m2",
        time: "3 months"
    }
];

let sliderImages = document.querySelector(".slider__images");
let sliderArrows = document.querySelector(".info__navigation");
let sliderDots = document.querySelector(".info__dots");
let sliderTitles = document.querySelector(".slider__title");
let sliderTextCity = document.getElementById("city");
let sliderTextArea = document.getElementById("area");
let sliderTextTime = document.getElementById("time");

function initImages(){
    images.forEach((image, index) => {
        let divImage = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += divImage;
    });
}

function initArrows(){
    sliderArrows.querySelectorAll(".info__arrow").forEach(arrow => {
        arrow.addEventListener("click", () => {
            let currentIndex = +sliderImages.querySelector(".active").dataset.index;
            let nextIndex;
            if (arrow.classList.contains("left")){
                nextIndex = currentIndex === 0? images.length - 1 : currentIndex - 1;
            } else {
                nextIndex = currentIndex === images.length - 1? 0 : currentIndex + 1;
            }
            moveSlider(nextIndex);
        });
    });
}

function initDots(){
    images.forEach((image, index) => {
        let dot = `<div class="info__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".info__dots-item").forEach(dot => {
        dot.addEventListener("click", () => {
            moveSlider(dot.dataset.index);
        });
    });
}

function initTitles(){
    images.forEach((image, index) => {
        let title = `<div class="slider__title-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].name}</div>`;
        sliderTitles.innerHTML += title;
    });

    sliderTitles.querySelectorAll(".slider__title-item").forEach(title => {
        title.addEventListener("click", () => {
            moveSlider(title.dataset.index);
        });
    });
}

function moveSlider(n){
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + n).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + n).classList.add("active");

    sliderTitles.querySelector(".active").classList.remove("active");
    sliderTitles.querySelector(".n" + n).classList.add("active");

    if(sliderImages.querySelector(".active").classList.contains("active")){
        sliderTextCity.textContent = images[n].city;
        sliderTextArea.textContent = images[n].area;
        sliderTextTime.textContent = images[n].time;
    }
}

initImages();
initArrows();
initDots();
initTitles();