const form = () => {
    const forms = document.querySelectorAll('.form'),
          modalOk = document.querySelector('.popup-ok'),
          modalError = document.querySelector('.popup-error');

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            postData('server.php', formData)
                .then(res => {
                    console.log(res);
                }).catch()
                .finally(() => {
                    const name = formData.get('name'),
                          phone = formData.get('phone');
                    if (!name || !phone) {
                        openModal(modalError);
                    } else {
                        openModal(modalOk);
                        form.reset();
                        setTimeout(() => {
                            modalOk.style.display = 'none';
                        }, 3000);
                    }
                })
            })
        })
        
    function openModal(elem) {
        document.querySelector('.popup').style.display = 'none';
        elem.style.display = 'flex';
    }
    
}

export default form;