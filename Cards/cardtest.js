let card = document.querySelectorAll('.card');

card.forEach(element => {
    element.addEventListener('mouseover', e => {
        card.forEach(elementHover => {
            elementHover.classList.add('cardHover');
        })
        if (e.target.classList.contains('cardHover')) {
            e.target.classList.remove('cardHover')
        }
    })
    element.addEventListener('mouseout', e => {
        card.forEach(elementUnHover => {
            elementUnHover.classList.remove('cardHover');
        })
    })
});