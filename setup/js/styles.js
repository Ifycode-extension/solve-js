let article = document.querySelector('body > article');
let a = document.querySelectorAll('body > article a');
let sm = document.querySelector('body > article a#repo-sm');
let lg = document.querySelector('body > article a#repo-lg');

/* =================================
Media queries added here too prevent 
css for home view showing up in other 
views on page reload - 2 
===================================*/
let deviceSizes = [
    window.matchMedia( "(min-width: 600px)" )
]

let repoLinksStyle = () => {
    if (deviceSizes[0].matches) {
        lg.classList.add('block');
        sm.classList.remove('block');
    } else {
        sm.classList.add('block');
        lg.classList.remove('block');
    }
}

let respondToQuery = () => {
    repoLinksStyle();
}

deviceSizes[0].addEventListener('change', respondToQuery);

/* ===================================
Add these here to prevent css for home 
view showing up in other views on page 
reload - 1
====================================*/
export const restoreStyle = () => {
    article.classList.remove('none');
    article.classList.add('flex');
    a.forEach(tag => {
        tag.classList.remove('none');
        tag.classList.add('block');
    });
    repoLinksStyle();
}

export const fixGlitch = () => {
    article.classList.remove('flex');
    article.classList.add('none');
    a.forEach(tag => {
        tag.classList.remove('block');
        tag.classList.add('none');
    });
    repoLinksStyle();
}

/* From filter.css other-ext */
export const filterStyles = () => {
    let spanParent = document.querySelectorAll('section > div:nth-child(2) div');
    spanParent.forEach(span => { span.classList.add('flex');});   
    let spanLeft = document.querySelectorAll('section > div:nth-child(2) span:nth-child(1)');
    spanLeft.forEach(span => { span.classList.add('flex');});
    let spanRight = document.querySelectorAll('section > div:nth-child(2) span:nth-child(2)');
    spanRight.forEach(span => { span.classList.add('block');});
}