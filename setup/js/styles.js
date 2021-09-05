let article = document.querySelector('body > article');
let a = document.querySelectorAll('body > article a');

export const restoreStyle = () => {
    article.classList.remove('none');
    article.classList.add('flex');
    a.forEach(tag => {
        tag.classList.remove('none');
        tag.classList.add('block');
    });
}

export const fixGlitch = () => {
    article.classList.remove('flex');
    article.classList.add('none');
    a.forEach(tag => {
        tag.classList.remove('block');
        tag.classList.add('none');
    });
}