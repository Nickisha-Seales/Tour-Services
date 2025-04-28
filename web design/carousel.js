const images = [
  "G1.jpg",
  "G8.jpg",
  "L2.jpg",
  "L0.jpg",
  "C8.jpg",
  "C5.jpg",
  "G7.jpg",
  "C10.jpg",
  "G4.jpg",
  "L3.jpg",
  "W3.jpg",
  "W5.jpg",
  "L5.webp",
];

let currentImage = 0;

function showImage() {
  const img = document.getElementById("carousel-image");
  img.src = images[currentImage];
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage();
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
}

// Auto-slide every 3 seconds
setInterval(nextImage, 3000);
