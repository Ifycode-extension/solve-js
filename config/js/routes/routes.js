import { Router } from './router.js';

export const RouterModule = (taskRoutes) => {

    const Routes = function(name, routes) {
        return {
            name: name,
            routes: routes
        }
    }

    taskRoutes = new Routes('taskRoutes', [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/filter',
            name: 'Filter'
        }
    ]);

    Router(taskRoutes);
}
