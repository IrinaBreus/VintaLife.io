const burger = () => {
    const trigger = document.querySelector('.nav-panel__menu-btn'),
          burger = document.querySelector('.burger'),
          lists = burger.querySelectorAll('.burger__menu li');

    trigger.addEventListener('click', () => {
        burger.classList.add('burger-active');
    });

    lists.forEach(list => {
        list.addEventListener('click', () => {
            burger.classList.remove('burger-active');
        })
    })

    burger.addEventListener('click', (e) => {
        if (e.target === burger && e.target !== document.querySelector('.burger__wrapper')) {
            burger.classList.remove('burger-active');
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && burger.classList.contains('burger-active')) {
            burger.classList.remove('burger-active');
        }
    })
}

export default burger;