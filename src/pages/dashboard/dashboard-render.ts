import { routerInstance } from '../../site/router';
import { PageDashboard } from './dashboard-comp';
import { authStatus } from '../../services/auth/auth-service';

export async function renderDashboard() {
    const res = await authStatus();
    if (!res.authenticated) {
        routerInstance.navigateTo('/');
        return;
    }
    const dashboard: Element = new PageDashboard();
    document.body.replaceChildren(dashboard);
}
