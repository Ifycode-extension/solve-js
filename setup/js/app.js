import { LoadView } from './views.js';

(() => {
    let homeBtn = document.querySelector('#homeBtn');
    let toggleBtn = document.querySelector('#toggleBtn');
    let filterBtn = document.querySelector('#filterBtn');
    let h1 = document.querySelector('#h1');
    let link = document.querySelectorAll('link')[1];
    let viewsLink = document.querySelector('#viewsLink');
    
    let common = (name, task) => {
        h1.innerHTML = `${name} ${task}`;
        let linkHref = (path, viewspath) => {
            link.href = path;
            viewsLink.href = viewspath;
        }
        if (h1.innerHTML === 'Solve js ') {
            let homeviewCSS = './setup/home/home.css';
            LoadView('./setup/home/home.html');
            linkHref('./setup/css/js/home.css', homeviewCSS);
        }else {
            let otherviewsCSS = './setup/css/js/other.css';
            if (h1.innerHTML === 'Toggle Task') {
                LoadView('./solve/toggle/toggle.html');
                linkHref(otherviewsCSS, './solve/toggle/toggle.css');
            }
            if (h1.innerHTML === 'Filter Task') {
                LoadView('./solve/filter/filter.html');
                linkHref(otherviewsCSS, './solve/filter/filter.css');
            }
        }
    }
    
    common('Solve js', '');
    
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        common('Solve js', '');
    });
    
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        common('Toggle', 'Task');
    });
    
    filterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        common('Filter', 'Task');
    });    
})();