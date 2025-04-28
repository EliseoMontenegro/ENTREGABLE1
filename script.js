// You can add custom scripts here for additional animations or interactions
document.addEventListener("DOMContentLoaded", function() {
    // Example animation effect on the badges section
    const badges = document.querySelector('.badges');
    badges.style.opacity = 0;
    badges.style.transition = 'opacity 2s';
    setTimeout(() => {
        badges.style.opacity = 1;
    }, 500);
});
