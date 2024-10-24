const slider = () => {
    const carousel = document.querySelector('.slider__field'),
          btnPrev = document.querySelector('.slider__btn_prev'),
          btnNext = document.querySelector('.slider__btn_next'),
          btnMore = document.querySelector('.slider__btn_more'),
          width = carousel.querySelector('.slider__item').offsetWidth,
          slides = [...carousel.children];

    let isDragging = false, startX, startScrollLeft;
    let offset = 0,
        count = 2;

    showBtn();
    btnPrev.addEventListener('click', () => {
        carousel.scrollLeft -= width;
        offset -= width;
        showBtn();
    });
    
    btnNext.addEventListener('click', () => {
        carousel.scrollLeft += width;
        offset += width;
        if (window.innerWidth > 1200) {
            showBtn(3);
        } else if (window.innerWidth <= 1200 && window.innerWidth > 768) {
            showBtn(2);
        }
        else if (window.innerWidth <= 768 && window.innerWidth > 576) {
            showBtn(1);
        }
    });

    if (window.screen.availWidth <= 768) {
        slides.forEach(slide => {
            slide.addEventListener('click', () => {
                slide.classList.toggle('item_active');
            })
        })
    }
    if (window.screen.availWidth <= 576) {
        hiddeSlide();
        showSlide();
        btnMore.addEventListener('click', () => {
            hiddeSlide();
            count += 2;
            showSlide();
            if (count == slides.length) {
                btnMore.style.display = 'none';
            }
        })
    }

    function hiddeSlide() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
    }
    function showSlide() {
        slides.forEach((slide, i) => {
            if (i < count) {
                slide.style.display = '';
            }
        });
    }
    function showBtn(num = 0) {
        if (offset === 0) {
            btnPrev.style.display = 'none'
        } else {
            btnPrev.style.display = '';

        }

        if (offset == width * (carousel.children.length - num)) {
            btnNext.style.display = 'none';
        } else {
            btnNext.style.display = '';
        }
    }
}

export default slider;