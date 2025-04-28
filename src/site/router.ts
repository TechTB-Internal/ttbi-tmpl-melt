import { tuiRouter } from 'tuijs-router';
import { renderHome } from "../pages/home/home-render";
import { renderDashboard } from '../pages/dashboard/dashbaord-render';

export const routerInstance = tuiRouter();
routerInstance.setRouteList([
    {
        path: '/',
        enterFunction: () => {
            renderHome();
        }
    },
    {
        path: '/dashboard',
        enterFunction: () => {
            renderDashboard();
        }
    },
]);
routerInstance.setServerRouteList([
    '/auth/:login-route'
])
