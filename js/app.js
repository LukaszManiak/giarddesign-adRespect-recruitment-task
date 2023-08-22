"use strict";

//ELEMENTS

// search elements
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".input");

// hero right and left buttons
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

// show more button
const showBtn = document.querySelector(".show-more-btn");

//mask and project grid container
const mask = document.querySelector(".mask");
const projectsGrid = document.querySelector(".projects-grid");

//hero photos
const heroImgs = document.querySelectorAll(".hero-img");

//grid photos

//MECHANICS

//changing photo
let currPhoto = 1;
rightBtn.addEventListener("click", () => {
  if (currPhoto >= 4) return;
  setHidden();
  currPhoto++;
  const img = document.querySelector(`[data-image="${currPhoto}"]`);
  img.classList.remove("hidden");
});

leftBtn.addEventListener("click", () => {
  if (currPhoto <= 1) return;
  setHidden();
  currPhoto--;
  const img = document.querySelector(`[data-image="${currPhoto}"]`);
  img.classList.remove("hidden");
});

//setting hidden on all hero photos
function setHidden() {
  heroImgs.forEach((img) => {
    img.classList.add("hidden");
  });
}

// toggeling search bar
searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
});

//showing and hiding pictures

showBtn.addEventListener("click", () => {
  if (showBtn.classList.contains("open-status")) {
    projectsGrid.style.maxHeight = "220vh";
    mask.style.display = "block";
    showBtn.innerHTML = `Rozwiń <img class="ml-2" src="icons/arrow-down-black.svg" alt="" />`;
    showBtn.classList.remove("open-status");
  } else {
    projectsGrid.style.maxHeight = "none";
    mask.style.display = "none";
    showBtn.innerHTML = "Zwiń";
    showBtn.classList.add("open-status");
  }
});

const gridPhotos = document.querySelectorAll(".grid-item");
const darkMask = document.querySelector(".dark-mask");
const gridPhotosModal = document.querySelector(".grid-photos-modal");
const modalLeftBtn = document.querySelector(".modal-left-btn");
const modalRightBtn = document.querySelector(".modal-right-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

// grid photos mechanics

let currGridPhoto = 1;

gridPhotos.forEach((photo) => {
  photo.addEventListener("click", () => {
    currGridPhoto = +photo.dataset.gridphotos;
    gridPhotosModal.classList.remove("hidden");
    darkMask.classList.remove("hidden");
    const halfPagePosition = 2590;
    window.scrollTo(0, halfPagePosition);
    updateModalPhotoSrc();
  });
});

closeModalBtn.addEventListener("click", () => {
  gridPhotosModal.classList.add("hidden");
  darkMask.classList.add("hidden");
});

const modalPhoto = document.querySelector(".modal-photo");

//gridPhoto skip mechanic
modalRightBtn.addEventListener("click", () => {
  if (currGridPhoto >= 15) return;
  currGridPhoto++;
  updateModalPhotoSrc();
});

modalLeftBtn.addEventListener("click", () => {
  if (currGridPhoto <= 1) return;
  currGridPhoto--;
  updateModalPhotoSrc();
});

// update photo src
function updateModalPhotoSrc() {
  const photoSrc = currGridPhoto < 9 ? "jpeg" : "jpg";
  modalPhoto.src = `images/photo${currGridPhoto}.${photoSrc}`;
}

// hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("flex");
  navMenu.classList.toggle("hidden");
});
