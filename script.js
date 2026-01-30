// Image array - All artwork images
const images = [
    'images/20200803_171500-01.jpeg',
    'images/20200806_131312.jpg',
    'images/1000279134.jpg',
    'images/1000284931.jpg',
    'images/1000391287.jpg',
    'images/1000391699.jpg',
    'images/1000395467.jpg',
    'images/1000398777.jpg',
    'images/1000405106 (3).jpg',
    'images/1000405252.jpg',
    'images/1000413394.jpg',
    'images/1000416027.jpg',
    'images/1000429999.jpg',
    'images/1000431512 (1).jpg',
    'images/1000435424.jpg',
    'images/1000444160.jpg',
    'images/1000444879.jpg',
    'images/DSC00094.JPG',
    'images/IMG_20200621_141623.png',
    'images/IMG_20200711_123328.jpg',
    'images/IMG_20250824_123517917 (3) (1).jpg'
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
