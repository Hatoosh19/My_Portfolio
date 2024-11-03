// Select filter buttons and portfolio items
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Filter function
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active class on filter buttons
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        // Show/Hide portfolio items based on filter
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });
});
