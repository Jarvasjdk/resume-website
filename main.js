if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}

function ready() {
    // toggle 'responsive' class to nav-bar when the hamburger is clicked
    document.querySelector('.nav-bar__link--hamburger').addEventListener('click', () => {
        let navBar = document.querySelector('.nav-bar')
        navBar.classList.toggle('responsive');
    })

    // toggle 'sticky' class to nav-bar when users scroll down 
    window.addEventListener('scroll', () => {
        document.querySelector('.nav-bar').classList.toggle('sticky', window.scrollY > 0)
    })


    // toggle 'current' class to nav links when users scroll to the associated section
    let mainNavLinks = document.querySelectorAll("nav a:not(:first-child)"); // to exclude the logo nav link

    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("current");
            } else {
                link.classList.remove("current");
            }
        });
    });
    
    if (document.querySelector('.timeline')) {
        handleTimelineAnimation();
    }
}

function handleTimelineAnimation() {
    const timelineCards = document.querySelectorAll('.timeline__card');
    
    const checkScroll = () => {
        timelineCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerPosition = window.innerHeight * 0.8; // Show cards when they're 80% up the viewport
            
            if (cardTop < triggerPosition) {
                card.classList.add('visible');
            }
        });
    };
    
    
    setTimeout(checkScroll, 100); // Small delay to ensure DOM is fully loaded
    
    window.addEventListener('scroll', checkScroll);
}