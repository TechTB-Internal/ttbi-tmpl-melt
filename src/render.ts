import { routerInstance } from './config';
import { PageHome } from './pages/page-home';
import { PageDashboard } from './pages/page-dashboard';
import { authStatus } from './util/utils';

export async function renderHome() {
    const res = await authStatus();
    if (res.authenticated) {
        routerInstance.navigateTo('/dashboard');
        return;
    }
    const home: Element = new PageHome();
    document.body.replaceChildren(home);
}

export async function renderDashboard() {
    const res = await authStatus();
    if (!res.authenticated) {
        routerInstance.navigateTo('/');
        return;
    }
    const dashboard: Element = new PageDashboard();
    document.body.replaceChildren(dashboard);
}
