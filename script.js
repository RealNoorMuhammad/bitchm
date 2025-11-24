// YouTube Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('youtube-modal');
    const iframe = document.getElementById('youtube-iframe');
    const closeBtn = document.querySelector('.close');
    const videoItems = document.querySelectorAll('.video-item');

    // Open modal when video is clicked
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            iframe.src = ''; // Stop video playback
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close modal when clicking outside the video
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                iframe.src = ''; // Stop video playback
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            iframe.src = ''; // Stop video playback
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Pause video row animations on hover
    const videoRow1 = document.querySelector('.video-row-1');
    const videoRow2 = document.querySelector('.video-row-2');

    if (videoRow1) {
        videoRow1.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });

        videoRow1.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    if (videoRow2) {
        videoRow2.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });

        videoRow2.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    // Burger Menu Functionality
    const burgerMenu = document.getElementById('burger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Check if elements exist
    if (burgerMenu && mobileNav) {
        // Toggle mobile menu
        burgerMenu.addEventListener('click', function() {
            console.log('Burger menu clicked'); // Debug log
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (mobileNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    } else {
        console.log('Burger menu or mobile nav not found'); // Debug log
    }

    // Close mobile menu when clicking on a link
    if (mobileNavLinks.length > 0) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (burgerMenu && mobileNav) {
                    burgerMenu.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }

    // Close mobile menu when clicking outside
    if (mobileNav) {
        mobileNav.addEventListener('click', function(e) {
            if (e.target === mobileNav) {
                if (burgerMenu) {
                    burgerMenu.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    }
});

const knowMemeBtn = document.getElementById('know-meme-btn');
if (knowMemeBtn) {
    knowMemeBtn.addEventListener('click', function() {
        window.open('https://dexscreener.com/solana/cuxspsgfez2nqbk2bow3kangsjnu2aglbu2jy1swcfu', '_blank');
    });
}