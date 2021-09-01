
export const Router = (taskRoutes) => {
    
    //window.history.pushState({}, '/', window.location.origin);

    let onLinkClick = (pathname) => {
        window.history.pushState({}, pathname, window.location.origin + pathname);
        //pathname = window.location.pathname;
        //console.log(pathname)
        let currentPath = window.location.pathname;
        console.log(currentPath);
    }

    let reloadLink = document.querySelector('#reload');

    window.onload = function (e) {

        //reloadLink.click();

        //onLinkClick('/');
        /*if (window.location.pathname === '/') {
            onLinkClick('/');
        }else if (window.location.pathname === '/toggle') {
            onLinkClick('/toggle');
        }else {
            onLinkClick('/filter');
        }*/   
    }

    let root = document.querySelector('#root');

    let homeBtn = document.querySelector('#homeBtn');
    let toggleBtn = document.querySelector('#toggleBtn');
    let filterBtn = document.querySelector('#filterBtn');

    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        onLinkClick('/');
        root.innerHTML = 'Home';
       // LoadView(`./views/error/404.html`, null);
    });

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        onLinkClick('/toggle');
        root.innerHTML = 'Toggle';
       // LoadView(`./views/error/404.html`, null);
    });

    filterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        onLinkClick('/filter');
        root.innerHTML = 'Filter';
    });


    //location.href = '/filter'
        //window.location.replace('/filter');
        //window.location.pathname = '/';


    /*
    let [toggle, filter] = [
        '',
        ''
    ];

    //console.log(toggle, filter);

    let loadView = (view) => {
        fetch(view)
        .then(response => { return response.text()})
        .then(res => {console.log(res)})
        .catch(error => console.log('error is', error))
    }

    loadView('./solve/toggle/toggle.html');
    loadView('./solve/filter/filter.html');
    */


    //console.log(toggle);

    /*let [toggle, filter] = [
        './solve/toggle/toggle.html',
        './solve/filter/filter.html'
    ];

    //console.log(toggle, filter);

    let loadView = (view) => {
        fetch(view)
        .then(response => { return response.text()})
        .then(res => console.log(res))
        .catch(error => console.log('error is', error))
    }

    loadView(toggle);
    loadView(filter);*/

    /*toggle = loadView('./solve/toggle/toggle.html');
    filter = loadView('./solve/filter/filter.html');

    console.log(toggle, filter);*/




    /*console.log(taskRoutes);
    console.log(taskRoutes.routes);

    fetch('/ui')
    .then(response => { return response.text()})
    .catch(error => console.log('error is', error))*/

    /*fetch('/ui')
    .then(response => { return response.text()})
    .catch(error => console.log('error is', error))*/
    
    
    
    
    //.then(str => {
        //console.log(str)
    //})
    //console.log(location.href)

    //let currentPath = window.location.pathname;

    //window.location.replace('/filter');

    /*fetch('/filter')
    .then(response => {
        if (response.ok) {
        return response.json()
        } else if(response.status === 404) {
            window.location.replace('/filter');
        } else {
        return Promise.reject('some other error: ' + response.status)
        }
    })
    .then(data => console.log('data is', data))
    .catch(error => console.log('error is', error));*/

    /*
    fetch('/')
    .then(response => {
        if (response.ok) {
        return response.json()
        } else if(response.status === 404) {
        return Promise.reject('error 404')
        } else {
        return Promise.reject('some other error: ' + response.status)
        }
    })
    .then(data => console.log('data is', data))
    .catch(error => console.log('error is', error));
    */

    /*let origin = `${window.location.origin}/go`;
    console.log(origin, currentPath)

    if (!currentPath) window.location.replace('/404');*/

    /*let currentPath;
    try {
        currentPath = window.location.pathname;
    }catch(err) {
        window.history.pushState({}, '/go', window.location.origin + '/go');
    }
    
    console.log(window.location.origin);*/
    
    

    //console.log(taskRoutes);

    //window.history.pushState({}, pathname, window.location.origin + pathname);

    //window.history.pushState({}, '/go', window.location.origin + '/go');

    /*let currentPath = window.location.pathname;
    //console.log(`${currentPath}filter`);

    let currentRoute = taskRoutes.routes.filter(taskRoute => {
        return taskRoute.path; //=== currentPath;
    });

    console.log(currentRoute);*/

    //window.location.pathname = `${currentPath}filter`;

    /*if (currentPath === '/filter') {
        console.log('works')
    }

    if (!currentPath) {
        console.log('Error');
    }*/

    /*let currentRoute = taskRoutes.routes.filter(taskRoute => {
        return taskRoute.path === currentPath;
    })[0];

    console.log(currentRoute);*/

    //console.log(taskRoutes.routes);








    /*try {
        currentPath = window.location.pathname;
    }catch(err) {
        console.log('Not found..');
        //window.location.pathname = '/404'
    }*/
    
    //console.log(currentPath);
    /*let currentRoute = taskRoutes.routes.filter(taskRoute => {
        return taskRoute.path === currentPath;
    })[0];

    console.log(currentRoute);*/
}