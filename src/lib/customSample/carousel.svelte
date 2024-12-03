    <script>
        document.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector('.carousel-track');
        const items = Array.from(track.children);
        const prevButton = document.querySelector('.control.prev');
        const nextButton = document.querySelector('.control.next');
        const totalItems = items.length;
        let currentIndex = 0;
        const duration = 3000; // 3 seconds
        let interval;
    
    function updateCarousel() {
        const width = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    
    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        updateCarousel();
        resetInterval();
    }
    
    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, duration);
    }
    
    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
    
    window.addEventListener('resize', updateCarousel);
    
    // Initialize carousel
    updateCarousel();
    interval = setInterval(nextSlide, duration);
    });
    
    </script>

    <div class="carousel">
        <button class="control prev">&#10094;</button>
        <div class="carousel-track">
            <div class="carousel-item">
                <slot></slot>
            </div>
        </div>
        <button class="control next">&#10095;</button>
    </div>

    <style>
        .carousel {
            width: 100%;
            max-width: 1200px;
            margin: auto;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
        }

        .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }

        .carousel-item {
            min-width: 100%;
            flex: 0 0 auto;
        }

        .control {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
            z-index: 1;
        }

        .control.prev {
            left: 10px;
        }

        .control.next {
            right: 10px;
        }

        @media (min-width: 768px) {
            .carousel-item {
                min-width: 25%;
        }
        }
    </style>

