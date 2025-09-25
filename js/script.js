// Functionality for Category Pages
const currentCategory = document.getElementById('current-category');

if (currentCategory) {
    const params = new URLSearchParams(window.location.search);
    const cat = (params.get('cat') || 'all').toLowerCase();
    currentCategory.textContent = cat === 'all' ? 'All' : cat.replace(/-/g, ' ');

    document.querySelectorAll('.feature-box').forEach(box => {
        const boxCat = box.dataset.category.toLowerCase();
        if (cat === 'all' || boxCat === cat) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// Functionality for Mobile Menu Icon
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
    