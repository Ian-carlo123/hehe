// Lightbox script
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".lightbox .close");
const prevBtn = document.querySelector(".lightbox .prev");
const nextBtn = document.querySelector(".lightbox .next");

const images = document.querySelectorAll(".gallery-grid img");
let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.dataset.caption || img.alt;
    currentIndex = index;
  });
});

// Close
closeBtn.onclick = () => { lightbox.style.display = "none"; };

// Prev
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].dataset.caption || images[currentIndex].alt;
};

// Next
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].dataset.caption || images[currentIndex].alt;
};

// Close on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
