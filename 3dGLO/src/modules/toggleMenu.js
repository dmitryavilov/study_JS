const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', e => {
            let target = e.target;
                target = target.closest('a');

            if (target) {
                handlerMenu();
            };
        });
};

export default toggleMenu;