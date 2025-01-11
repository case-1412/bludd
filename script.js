// Add interactivity if needed, e.g., smooth scrolling
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
