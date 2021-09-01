//import { FilterModule } from '../views/filter/filter.js';
//import { ToggleModule } from '../views/toggle/toggle.js';

let previousMain = document.querySelector('#root');

export const LoadView = (htmlUrl, routePath) => {

    // 3. Load page into view

    fetch(htmlUrl /*, options */)
    .then((response) => { return response.text() })
    .then((htmlText) => {
        function stringToHTML(str) {
            // Convert the HTML string into a document object
            let parser = new DOMParser();
            let doc = parser.parseFromString(str, 'text/html');
            let fetchedMain = doc.body.querySelector('main');
            previousMain.parentNode.replaceChild(fetchedMain, previousMain);
            
            /*//TODO: load javascript on view change not on route change
            if (routePath === '/filter') {
                FilterModule();
            }
        
            if (routePath === '/toggle') {
                ToggleModule();
            }*/
        }
        stringToHTML(htmlText);
    })
    .catch((error) => {
        //console.warn(error); //comment out for clean console
    });
}
