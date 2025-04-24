import { routerInstance } from "./global";

routerInstance.setRouteList([
    {
        path: '/',
        enterFunction: renderHome
    },
    {
        path: '/dashboard',
        enterFunction: renderDashboard
    },
]);
routerInstance.setServerRouteList([
    '/login/:login-route'
])

routerInstance.startRouter();
