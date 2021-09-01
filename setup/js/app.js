import { LoadView } from './views.js';

let homeBtn = document.querySelector('#homeBtn');
let toggleBtn = document.querySelector('#toggleBtn');
let filterBtn = document.querySelector('#filterBtn');

//let root = document.querySelector('#root');
let h1 = document.querySelector('#h1');

let common = (name) => {
    //singlePage(`index.html`);
    //root.innerHTML = name;
    h1.innerHTML = name;
}

common('Home');
LoadView('./setup/home/home.html');

homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    common('Home');
    LoadView('./setup/home/home.html');
});

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    common('Toggle');
    LoadView('./solve/toggle/toggle.html');
});

filterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    common('Filter');
    LoadView('./solve/filter/filter.html');
});