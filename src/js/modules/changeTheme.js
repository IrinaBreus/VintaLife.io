const changeTheme = () => {
    const trigger = document.querySelector('.nav-panel__theme-btn'),
          body = document.querySelector('body');

    trigger.addEventListener('click', () => {
        body.classList.toggle('theme');
    })
}

export default changeTheme;