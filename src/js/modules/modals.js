import calcScroll from "./calcScroll";

const modals = () => {
    const triggers = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.popup'),
          close = modal.querySelector('.popup__close'),
          closeBtns = document.querySelectorAll('[data-close]');
    
    const scroll = calcScroll();
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn);
        })
    });

    triggers.forEach(btn => {
        btn.addEventListener('click', () => {        
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        })
    });
    
    close.addEventListener('click', () => {
        closeModal(close);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(close);
    });

    document.addEventListener('keydown', (e) => {
        if (e.code ==='Escape' && modal.style.display == 'flex') {
            closeModal(close);
        }
    })

    function closeModal(btn) {
        btn.parentElement.parentElement.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }
}

export default modals;