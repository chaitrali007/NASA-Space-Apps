import React from "react";
import ReactDOM from "react-dom/client";
import "./Carousel.css";
// import HoverCarousel from 'hover-carousel';
import Img1 from "./images/Screenshot 2023-10-07 170748.png";
import Img2 from "./images/Screenshot 2023-10-07 171013.png";

function Carousel()
{
    return (
      <div class="carousel" data-carousel="1" data-speed="2000">
        <span class="carousel-control-left"></span>
        <span class="carousel-control-right"></span>
        <div class="carousel-content">
          <img src={Img1} alt="image 5" />
          <img src={Img2} alt="image 1" />
           <img src={Img1} alt="image 2" />
          {/* <img src={Img2} alt="image 3" /> */}
          {/* <img src={Img1} alt="image 1" />  */}
          
        </div>
      </div>
    );
}
if (document.querySelectorAll(".carousel").length > 0) {
  let carousels = document.querySelectorAll(".carousel");
  carousels.forEach(carousel => newCarousel(carousel));

  function newCarousel(carousel) {
    let carouselChildren = document.querySelector(
      `.carousel[data-carousel="${carousel.dataset.carousel}"]`
    ).children;
    let speed = carousel.dataset.speed;
    let carouselContent = document.querySelectorAll(`.carousel-content`)[
      carousel.dataset.carousel - 1
    ];
    const carouselLength = carouselContent.children.length;
    let width = window.innerWidth;
    let count = width;
    let counterIncrement = width;
    let int = setInterval(timer, speed);

    // initial transform
    carouselContent.style.transform = `translateX(-${width}px)`;

    function timer() {
      if (count >= (counterIncrement - 2) * (carouselLength - 2)) {
        count = 0;
        carouselContent.style.transform = `translateX(-${count}px)`;
      }
      count = count + counterIncrement;
      carouselContent.style.transform = `translateX(-${count}px)`;
    }

    function carouselClick() {
      // left click
      carouselChildren[0].addEventListener("click", function() {
        count = count - width;
        carouselContent.style.transform = `translateX(-${count - 100}px)`;
        if (count < counterIncrement) {
          count = counterIncrement * (carouselLength - 2);
          carouselContent.style.transform = `translateX(-${count - 100}px)`;
        }
      });
      // right click
      carouselChildren[1].addEventListener("click", function() {
        count = count + width;
        carouselContent.style.transform = `translateX(-${count + 100}px)`;
        if (count >= counterIncrement * (carouselLength - 1)) {
          count = counterIncrement;
          carouselContent.style.transform = `translateX(-${count + 100}px)`;
        }
      });
    }

    function carouselHoverEffect() {
      // left hover effect events
      carouselChildren[0].addEventListener("mouseenter", function() {
        carouselContent.style.transform = `translateX(-${count - 100}px)`;
        clearInterval(int);
      });
      carouselChildren[0].addEventListener("mouseleave", function() {
        carouselContent.style.transform = `translateX(-${count}px)`;
        int = setInterval(timer, speed);
      });

      // right hover effect events
      carouselChildren[1].addEventListener("mouseenter", function() {
        carouselContent.style.transform = `translateX(-${count + 100}px)`;
        clearInterval(int);
      });
      carouselChildren[1].addEventListener("mouseleave", function() {
        carouselContent.style.transform = `translateX(-${count}px)`;
        int = setInterval(timer, speed);
      });
    }

    carouselHoverEffect();
    carouselClick();
  }
}

export default Carousel;

// const MyImageCarousel = () => {
//   const images = [
//     Img1,
//     Img2,
//     // Add more image URLs here
//   ];

//   return (
//     <div>
//       <HoverCarousel images={images} />
//     </div>
//   );
// };

// export default MyImageCarousel;