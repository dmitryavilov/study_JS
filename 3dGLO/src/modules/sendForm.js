const sendForm = form => {
        const errorMessage = 'Что-то пошло не так...',
              loadMessage = 'Загрузка...',
              successMessage = 'Спасибо! Мы скоро с вами свяжемся';

        const statusMessage = document.createElement('div');

        statusMessage.style.cssText = 'font-size: 2rem';

        const postData = body => {
            return fetch('./server.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };

        const clearInputs = () => {
            const inputs = form.querySelectorAll('input');

            inputs.forEach(elem => elem.value = '');
        }

        const validation = () => {
            if (form.id === 'form1' || form.id === 'form3') {
                form.addEventListener('input', e => {
                    let target = e.target;

                    if (target.matches('input[type=text]')) {
                        target.value = target.value.match(/[а-яё ]+/i, '');
                    } else if (target.matches('input[type=tel]')) {
                        target.value = target.value.match(/[0123456789+]+/);
                    } else if (target.matches('input[type=email]')) {
                        target.value = target.value.match(/[a-z0123456789\.@+]+/i);
                    }
                });
            } else {
                console.log('=)');
            }
        };

        validation();

        form.addEventListener('submit', e => {
           e.preventDefault();
           if (form.querySelector('input[type=text]').value.trim().length >= 2 &&
               form.querySelector('input[type=email]').value.trim() !== '' &&
               form.querySelector('input[type=tel]').value.length >= 7 &&
               form.querySelector('input[type=tel]').value.length <= 11) 
            { 

                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                statusMessage.style.color = 'white';
                const formData = new FormData(form);
                let body = {

                };

                for (let val of formData.entries()) {
                    body[val[0]] = val[1];
                }

                postData(body).then(request => {
                    if (request.status !== 200) {
                        throw new Error('status network not 200.')
                    };
                    
                    statusMessage.style.display = 'block';
                    statusMessage.style.color = 'white';
                    statusMessage.textContent = successMessage;
                    setInterval(() => {
                        statusMessage.style.display = 'none';
                    }, 5000);
                }).catch(error => {
                    statusMessage.style.display = 'block';
                    statusMessage.style.color = 'white';
                    console.log(error);
                    statusMessage.textContent = errorMessage;
                    console.log(statusMessage);
                    setInterval(() => {
                        statusMessage.style.display = 'none';
                    }, 5000)});
                

                clearInputs();
            } else {
                alert('Данные введены некорректно');
            }
        });
};

export default sendForm;