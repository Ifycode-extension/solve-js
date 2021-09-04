import { LoadView } from './views.js';

(() => {
    let homeBtn = document.querySelector('#homeBtn');
    let toggleBtn = document.querySelector('#toggleBtn');
    let filterBtn = document.querySelector('#filterBtn');
    let h1 = document.querySelector('#h1');
    let link = document.querySelectorAll('link')[1];
    let viewsLink = document.querySelector('#viewsLink');

    let linkHref = (path, viewspath) => {
        link.href = path;
        viewsLink.href = viewspath;
    }
    
    let common = (title) => {
        //console.log(title);
        h1.innerHTML = title;
        if (h1.innerHTML === 'Solve js') {
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

    let setTitleStorage = (title) => {
        localStorage.setItem('pageTitle', title);
    }

    common('Solve js');
    //setTitleStorage('Solve js');
    
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        common('Solve js');
        setTitleStorage('Solve js');
    });
    
    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        common('Toggle Task');
        setTitleStorage('Toggle Task');
    });
    
    filterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        common('Filter Task');
        setTitleStorage('Filter Task');
    });
    
    //localStorage.clear();

    window.onload = function() {
        
        let title = localStorage.getItem('pageTitle');
        common(title);





        //h1.innerHTML = title;
        //if (h1.innerHTML === 'Toggle Task') h1.innerHTML = title;

        /*if (h1.innerHTML === 'Toggle Task') {
            LoadView('./solve/toggle/toggle.html');
            linkHref('./setup/css/js/other.css', './solve/toggle/toggle.css');
        }*/
                //linkHref(otherviewsCSS, './solve/toggle/toggle.css');

        /*
        let reloadTitle = localStorage.getItem('h1-title');
        //h1.innerHTML = reloadTitle;
        common(reloadTitle, '');*/
    }
})();