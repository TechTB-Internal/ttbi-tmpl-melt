import './styles/global.css';
import { routerInstance } from "./global";
import { renderPageBaseline, renderHome, renderDashboard } from "./render";

routerInstance.setRouteList([
    {
        path: '/',
        enterFunction: () => {
            renderPageBaseline();
            renderHome();
        }
    },
    {
        path: '/dashboard',
        enterFunction: () => {
            renderPageBaseline();
            renderDashboard();
        }
    },
]);
routerInstance.setServerRouteList([
    '/login/:login-route'
])

routerInstance.startRouter();
