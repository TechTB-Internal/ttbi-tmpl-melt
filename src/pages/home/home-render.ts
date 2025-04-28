import { routerInstance } from '../../site/router';
import { PageHome } from './home-comp';
import { authStatus } from '../../services/auth/auth-service';

export async function renderHome() {
    const res = await authStatus();
    if (res.authenticated) {
        routerInstance.navigateTo('/dashboard');
        return;
    }
    const home: any = new PageHome();
    document.body.replaceChildren(home);
}


