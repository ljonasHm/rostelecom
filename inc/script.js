function flipCard() {
    const flipButtons = document.querySelectorAll('.onbutt');
    const backflipButtons = document.querySelectorAll('.offbut');

    flipButtons.forEach((button) => {
        button.addEventListener('click', () => {

            const frontSide = button.parentElement.parentElement;

            frontSide.style.transform = "rotateY(180deg)";
            frontSide.nextElementSibling.style.transform = "rotateY(360deg)";
            
        });
    });
    backflipButtons.forEach((button) => {
        button.addEventListener('click', () => {

            const backSide = button.parentElement.parentElement;

            backSide.style.transform = "rotateY(180deg)";
            backSide.previousElementSibling.style.transform = "rotateY(360deg)";
            
        });
    });
}

function checkTarif() {
    const tabs = document.querySelectorAll('.tarif__tabs-button');
    const tarifBlocks = document.querySelectorAll('.tarif__cards-block');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {

            if (tab.getAttribute('data-category') == 'internet') {
                console.log(document.documentElement.style);
            }

            tabs.forEach((tab) => {
                tab.classList.remove('tarif__tabs-button-checked');
            });
            
            tab.classList.add('tarif__tabs-button-checked');
            tarifBlocks.forEach((block) => {
                if (block.getAttribute('data-category') == tab.getAttribute('data-category')) {
                    block.classList.remove('hide');
                } else {
                    block.classList.add('hide');
                }
            });
        });
    });
}

flipCard();
checkTarif();