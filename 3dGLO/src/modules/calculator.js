const calculator = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
              calcType = document.querySelector('.calc-type'),
              calcCount = document.querySelector('.calc-count'),
              calcSquare = document.querySelector('.calc-square'),
              calcDay = document.querySelector('.calc-day'),
              totalPrice = document.getElementById('total');

        const calculatorValidation = e => {
            let target = e.target;

            target.value = target.value.replace(/[а-яёa-z]/i, '');
        };

        const calcSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                  squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            };

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            };

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            };

            
            const toCount = () => {
                let counter = 0;

                if (counter < total) {
                    for (let i = 0; i < Math.floor(total); i++) {
                        const changeCount = () => {
                            counter = i;
                            totalPrice.textContent = counter;
                        };

                        setTimeout(changeCount, 220);
                    }
                } else if (counter > total) {
                    for (let i = 0; i < Math.floor(total); i++) {
                        counter = i;
                        const changeCount = () => {
                            totalPrice.textContent = counter;
                        };

                        setTimeout(changeCount, 220);
                    }
                }
            };

            toCount();
        }

        calcBlock.addEventListener('change', e => {
            let target = e.target;

            
            if (target.matches('.calc-item')) {
                calcSum();
            };
        });
        
        calcBlock.addEventListener('click', e => {
            let target = e.target,
                input = target.matches('.calc-item');

            if (input) {
                target.addEventListener('input', calculatorValidation);
            } else {
                target.removeEventListener('input', calculatorValidation);
            }
        });
};

export default calculator;