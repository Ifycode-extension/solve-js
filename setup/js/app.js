import { LoadView } from './views.js';

let homeBtn = document.querySelector('#homeBtn');
let toggleBtn = document.querySelector('#toggleBtn');
let filterBtn = document.querySelector('#filterBtn');

let root = document.querySelector('#root');
let h1 = document.querySelector('#h1');

let common = (name, task) => {
    h1.innerHTML = `${name} ${task}`;
    if (h1.innerHTML === 'Solve js ') {
        root.classList.add('remove');
    }
}

common('Solve js', '');
LoadView('./setup/home/home.html');

homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    common('Solve js', '');
    LoadView('./setup/home/home.html');
});

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    common('Toggle', 'Task');
    root.classList.remove('remove');
    LoadView('./solve/toggle/toggle.html');
});

filterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    common('Filter', 'Task');
    root.classList.remove('remove');
    LoadView('./solve/filter/filter.html');
});
