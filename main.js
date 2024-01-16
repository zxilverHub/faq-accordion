const faqs = document.querySelectorAll(".faq");

faqs.forEach( faq => {
    const expandBtn = faq.querySelector('.title');

    expandBtn.addEventListener('click', () => {
        const content = faq.querySelector('p');
        const icon = expandBtn.querySelector('button img');

        if(content.classList.contains('none')) {
            icon.src = "./assets/images/icon-minus.svg";

            content.classList.remove('none');
            content.classList.add('expand');
        } else {
            icon.src = "./assets/images/icon-plus.svg";

            content.classList.remove('expand');
            content.classList.add('none');
        }
    })
})