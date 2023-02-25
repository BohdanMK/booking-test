const showMore = document.querySelector('.promotion__show');
const hideBlock = document.querySelector('.promotion__info-more-text');
const btnArrow = document.querySelector('.promotion__show-img');

showMore.addEventListener('click', e => {

    hideBlock.classList.toggle('see');
    btnArrow.classList.toggle('see');
});

