(function () {
  document.addEventListener('DOMContentLoaded', () => {
    console.log(document.readyState);
    const SLIDER = document.querySelector('.slider');
    const SLIDE = SLIDER.querySelector('.slide');
    const SLIDES = SLIDER.querySelectorAll('.slide');
    const SLIDER_INNER = SLIDER.querySelector('.slider-inner');

    let offset = 0;
    let widthBlock = SLIDER.clientWidth;
    let timer = setInterval(goNext, 5000);

    SLIDER.addEventListener('mouseenter', () => {
      clearInterval(timer);
    });

    SLIDER.addEventListener('mouseleave', () => {
      timer = setInterval(goNext, 5000);
    });

    SLIDER.querySelector('.slider-next').addEventListener('click', () => {
      goNext();
    });

    SLIDER.querySelector('.slider-prev').addEventListener('click', () => {
      goPrev();
    });

    function goNext() {

      offset += widthBlock;

      if (offset > widthBlock * (SLIDES.length - 1)) {
        offset = 0;
      }

      SLIDER_INNER.style.left = `-${offset}px`;
    }

    function goPrev() {

      offset -= widthBlock;

      if (offset < 0) {
        offset = widthBlock * (SLIDES.length - 1);
      }

      SLIDER_INNER.style.left = `-${offset}px`;
    }
  });
}());