import { LoadView } from './views.js';
import { restoreStyle } from './styles.js';
import { fixGlitch } from './styles.js';

(() => {
    let h1 = document.querySelector('#h1');
    let link = document.querySelectorAll('link')[1];
    let viewsLink = document.querySelector('#viewsLink');

    let linkHref = (path, viewspath) => {
        link.href = path;
        viewsLink.href = viewspath;
    }

    let common = (title) => {
        h1.innerHTML = title;
        if (title === 'Solve js') {
            let homeviewCSS = './setup/home/home.css';
            LoadView('./setup/home/home.html', title);
            linkHref('./setup/css/js/home.css', homeviewCSS);
            restoreStyle();
        }else {
            let otherviewsCSS = './setup/css/js/other.css';
            if (title === 'Toggle Task') {
                LoadView('./solve/toggle/toggle.html', title);
                linkHref(otherviewsCSS, './solve/toggle/toggle.css');
            }
            if (title === 'Filter Task') {
                LoadView('./solve/filter/filter.html', title);
                linkHref(otherviewsCSS, './solve/filter/filter.css');
            }
            if (title === 'Fetch Task') {
                LoadView('./solve/filter/filter.html', title);
                linkHref(otherviewsCSS, './solve/filter/filter.css');
            }
            fixGlitch();
        }
    }

    let aRoutes = Array.from(document.querySelectorAll('[route]'));

    let navigate = (event) => {
        h1.classList.add('font-transition');
        event.preventDefault();
        let route = event.target.attributes[0].value;
        common(route);
        localStorage.setItem('pageTitle', route);
    }

    aRoutes.forEach(a => {
        a.addEventListener('click', navigate, false);
    });

    window.onload = function() {
        h1.classList.remove('font-transition');
        let getItem = localStorage.getItem('pageTitle');
        if (getItem !== null) {
            common(getItem);
        } else {
            common('Solve js');
        }
    }
})();