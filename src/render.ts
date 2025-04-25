import { PageHome } from './pages/page-home';
import { PageDashboard } from './pages/page-dashboard';

export function renderHome() {
    const home: Element = new PageHome();
    document.body.appendChild(home);
}

export function renderDashboard() {
    const dashboard: Element = new PageDashboard();
    document.body.appendChild(dashboard);
}
