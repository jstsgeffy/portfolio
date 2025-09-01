// Navbar scroll effect
        const navbar = document.getElementById("navbar");
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });

        // Dark mode toggle
        const toggle = document.getElementById("darkToggle");
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            toggle.innerHTML = document.body.classList.contains("dark-mode")
                ? '<i class="bi bi-sun"></i>'
                : '<i class="bi bi-moon"></i>';
            
            // Update navbar background in dark mode
            if (document.body.classList.contains("dark-mode")) {
                navbar.classList.add("navbar-dark");
            } else {
                navbar.classList.remove("navbar-dark");
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a.nav-link').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active class
                document.querySelectorAll('a.nav-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });
