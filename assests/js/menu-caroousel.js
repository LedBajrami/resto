
const wrapper2 = document.querySelector(".wrapper2");
const carousel2 = document.querySelector(".carousel2");
const firstCardWidth2 = carousel2.querySelector(".card2").offsetWidth;
const arrowBtns2 = document.querySelectorAll(".wrapper2 i");
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = false, isAutoPlay2 = true, startX2, startScrollLeft2, timeoutId2;

// Get the number of cards that can fit in the carousel at once
let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens2.slice(-cardPerView2).reverse().forEach(card => {
    carousel2.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens2.slice(0, cardPerView2).forEach(card => {
    carousel2.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel2.classList.add("no-transition");
carousel2.scrollLeft = carousel2.offsetWidth;
carousel2.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id == "left2" ? -firstCardWidth2 : firstCardWidth2;
    });
});

const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX2 = e.pageX;
    startScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    if(!isDragging2) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove("dragging");
}

const infiniteScroll2 = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel2.scrollLeft === 0) {
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
        carousel2.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth) {
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.offsetWidth;
        carousel2.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId2);
    if(!wrapper2.matches(":hover")) autoPlay();
}

const autoPlay2 = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
  }
  autoPlay2();


carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("scroll", infiniteScroll2);
wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper2.addEventListener("mouseleave", autoPlay2);