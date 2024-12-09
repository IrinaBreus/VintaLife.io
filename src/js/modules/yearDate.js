const yearDate = () => {
    const dateField = document.querySelector('.footer__protection span');

    let date = new Date();

    dateField.textContent = `${date.getFullYear()}`;
    console.log(date.getFullYear());
}

export default yearDate;