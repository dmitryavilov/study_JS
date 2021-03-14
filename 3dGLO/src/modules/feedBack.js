const feedBack = () => {
        const fbForm = document.getElementById('form2');

        const feedBackValidation = e => {
            let target = e.target;

            const valueReplace = elem => {
                target.value = elem;
            };

            switch (target.id) {
                case ('form2-name'):
                    valueReplace(target.value.replace(/( |\-){1}[a-z]( |\-){1}/gi, ''));
                    valueReplace(target.value.replace(/\d/gi, ''));
                    valueReplace(target.value.replace(/((\-){2,}|)*((\-){2,}|)*/gi, ''));
                    valueReplace(target.value.replace(/\s+/gi, ' '));
                    valueReplace(target.value.replace(/( |^)[а-яё]/g, x => x.toUpperCase()));

                    break;
                case ('form2-phone'):
                    valueReplace(target.value.match(/\+?[7,8]([-()]*\d){10}/g));

                    break;
                case ('form2-message'):
                    valueReplace(target.value.replace(/\d/gi, ''));

                    break;
            };
        };

        fbForm.addEventListener('input', e => {
            let target = e.target;

            if (target.matches('input[type=text]')) {
                target.value = target.value.match(/[а-яё ]+/i, '');
            } else if (target.matches('input[type=tel]')) {
                target.value = target.value.match(/[0123456789+]+/);
            } else if (target.matches('input[type=email]')) {
                target.value = target.value.match(/[a-z0123456789\.@+]+/i);
            } else {
                target.value = target.value.match(/[а-яё0123456789\.,\-:;'" ]+/i);
            }
        })
        
        fbForm.addEventListener('click', e => {
            let target = e.target,
                input = target.matches('.top-form'),
                message = target.matches('.mess');

            if (input || message) {
                target.addEventListener('blur', feedBackValidation);
            } else {
                target.removeEventListener('blur', feedBackValidation);
            };
        });
};

export default feedBack;