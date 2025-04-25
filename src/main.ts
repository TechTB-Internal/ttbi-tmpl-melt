import './styles/global.css';
import { routerInstance } from "./config";
import { renderHome, renderDashboard } from "./render";

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
    '/login/:login-route'
])

routerInstance.startRouter();
