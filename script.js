document.addEventListener("DOMContentLoaded", function() {
    // Add animation to the circle
    const circle = document.querySelector('.circle');
    circle.style.animation = 'rotate 10s linear infinite';

    // Add fade-in animation to text layers
    const layers = document.querySelectorAll('.layer');
    layers.forEach((layer, index) => {
        layer.style.opacity = '0';
        layer.style.animation = `fadeIn 2s forwards ${index * 0.5}s`;
    });
});

// Define keyframes for the animations
const style = document.createElement('style');
style.innerHTML = `
@keyframes rotate {
    0% {
        transform: rotate(0deg) translateY(-1650px) translateX(180px);
    }
    100% {
        transform: rotate(360deg) translateY(-1650px) translateX(180px);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
`;




document.head.appendChild(style);




