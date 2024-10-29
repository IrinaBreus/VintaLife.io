import calcScroll from "./calcScroll";

const modals = () => {
    const triggers = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.popup'),
          close = modal.querySelector('.popup__close');
    
    const scroll = calcScroll();

    triggers.forEach(btn => {
        btn.addEventListener('click', () => {        
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        })
    });
    
    close.addEventListener('click', () => {
        closeModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.code ==='Escape' && modal.style.display == 'flex') {
            closeModal();
        }
    })

    function closeModal() {
        close.parentElement.parentElement.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }
}

export default modals;