const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close');
     
        let opacityCounter = 0,
            int;

        const animatePopup = () => {
            popup.style.display = 'block';
            if (opacityCounter < 1 && document.documentElement.clientWidth > 768) {
                opacityCounter += 0.01;
                popup.style.opacity = opacityCounter;
            } else {
                clearInterval(int);
            }
        };
        
        popupBtn.forEach(item => {
            item.addEventListener('click', animatePopup);

            if (document.documentElement.clientWidth > 768) {
                item.addEventListener('click', () => int = setInterval(animatePopup, 8));
            };
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            if (document.documentElement.clientWidth > 768) {
                opacityCounter = 0; 
                clearInterval(int);
            }
        });

        popup.addEventListener('click', e => {
            let target = e.target;
                target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
                opacityCounter = 0; 
                clearInterval(int);
            }
        });
};

export default togglePopup;