import { LoadView } from './views.js';

(() => {
    let homeBtn = document.querySelector('#homeBtn');
    let toggleBtn = document.querySelector('#toggleBtn');
    let filterBtn = document.querySelector('#filterBtn');
    let h1 = document.querySelector('#h1');
    let link = document.querySelectorAll('link')[1];
    
    let common = (name, task) => {
        h1.innerHTML = `${name} ${task}`;
        let linkHref = (path) => {
            link.href = path;
        }
        if (h1.innerHTML === 'Solve js ') {
            LoadView('./setup/home/home.html');
            linkHref('./setup/css/js/home.css');
        }else {
            linkHref('./setup/css/js/other.css');
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
        LoadView('./solve/toggle/toggle.html');
    });
    
    filterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        common('Filter', 'Task');
        LoadView('./solve/filter/filter.html');
    });    
})();