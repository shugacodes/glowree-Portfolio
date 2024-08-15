document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.text-item');
    let currentIndex = 0;

    function showNextText() {
        texts[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % texts.length;
        texts[currentIndex].classList.add('active');
    }

    // Initialize the first text item
    texts[currentIndex].classList.add('active');

    // Change text every 2 seconds
    setInterval(showNextText, 2000);
});


// down arrow 
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    function checkScrollPosition() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scrollIndicator.style.display = 'none';
    } else {
        scrollIndicator.style.display = 'flex';
    }
}

    // Initial check
    checkScrollPosition();

    // Check scroll position on scroll
    window.addEventListener('scroll', checkScrollPosition);
});



document.addEventListener("DOMContentLoaded", function() {
    var visibleDiv = document.getElementById("visibleDiv");
    var hiddenDiv = document.getElementById("hiddenDiv");

    visibleDiv.addEventListener("mouseenter", function() {
        visibleDiv.classList.add("hidden");
        hiddenDiv.classList.remove("hidden");
    });

    hiddenDiv.addEventListener("mouseleave", function() {
        hiddenDiv.classList.add("hidden");
        visibleDiv.classList.remove("hidden");
    });
});