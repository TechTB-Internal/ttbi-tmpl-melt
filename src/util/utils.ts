import { routerInstance } from "../config";

export async function login() {
    try {
        const auth = await authReq();
        if (auth['success']) {
            routerInstance.navigateTo('/dashboard');
            return;
        }
        const elmLogin = document.getElementById('comp-login');
        elmLogin?.setAttribute('loading', 'true');
        console.log(`login failed`);
        return;
    } catch (er) {
        console.error(er);
    }
}

export async function authStatus() {
    try {
        const res = await fetch('/auth/status', {
            method: 'GET',
            credentials: 'include' 
        });
        const data = await res.json();
        if (data.authenticated) {
            return {
                authenticated: true,
                user: data.use
            };
        }
        return {
            authenticated: false
        };
    } catch (er) {
        console.error(er);
        return {
            authenticated: false
        };
    }
}

export async function authReq() {
    try {
        const usernameInput = document.getElementById('username') as HTMLInputElement | null;
        const passwordInput = document.getElementById('password') as HTMLInputElement | null;
        const username: string = usernameInput?.value ?? '';
        const password: string = passwordInput?.value ?? '';
        const payload: Object = {
            username: username,
            password: password
        };
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
            return {
                success: true
            };
        }
        return {
            success: false,
            message: data.message
        };
    } catch (er: any) {
        console.error(er);
        return {
            success: false,
            message: er.message
        };;
    }
}
