// Image array - All artwork images
const images = [
    'images/Art_1.jpg',
    'images/Art_2.jpg',
    'images/Art_3.jpg',
    'images/Art_4.jpg',
    'images/Art_5.jpg',
    'images/Art_6.jpg',
    'images/Art_7.jpg',
    'images/Art_8.jpg',
    'images/Art_9.jpg',
    'images/Art_10.jpg',
    'images/Art_11.jpg',
    'images/Art_12.jpg',
    'images/Art_13.jpg',
    'images/Art_14.jpg',
    'images/Art_15.jpg',
    'images/Art_16.jpg',
    'images/Art_17.jpg',
    'images/Art_18.jpg',
    'images/Art_19.jpg',
    'images/Art_20.jpg'
];

// Load gallery images dynamically
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    images.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = () => openLightbox(index);
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Artwork ${index + 1}`;
        img.loading = 'lazy';
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
}

// Lightbox functionality
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightbox.style.display = 'block';
    lightboxImg.src = images[currentImageIndex];
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = images[currentImageIndex];
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load gallery
    loadGallery();
    
    // Close lightbox
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    closeLightboxBtn.onclick = closeLightbox;
    
    // Previous and next buttons
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    prevBtn.onclick = () => changeImage(-1);
    nextBtn.onclick = () => changeImage(1);
    
    // Close lightbox when clicking outside image
    const lightbox = document.getElementById('lightbox');
    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    };
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeImage(1);
            }
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
