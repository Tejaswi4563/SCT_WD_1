document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('mainNavbar');
    const scrollThreshold = 100; // Distance in pixels scrolled from the top to trigger style change

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is loaded already scrolled down
    handleScroll();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href').substring(1); // Get the section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate position considering fixed header height
                const headerOffset = navbar.offsetHeight; // Get height of the navbar
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});