const ourCommand = () => {
        const command = document.getElementById('command');

        command.addEventListener('mouseover', e => {
            let target = e.target;

            if (target.matches('.command__photo')) {
                target.dataset.back = target.src
                target.src = target.dataset.img;

                target.addEventListener('mouseout', () => {
                    target.src = target.dataset.back;
                });
            };
        });
};

export default ourCommand;