import { routerInstance } from "../config";

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

export async function login(username: string, password: string) {
    try {
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
            routerInstance.navigateTo('/dashboard');
            return true;
        }
        console.warn(`login failed`);
        return false;
    } catch (er: any) {
        console.error(er);
        return false;
    }
}

export async function logout() {
    try {
        const res = await fetch('/auth/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json();
        if (!data.success) {
            throw new Error(`Logout failed.`)
        }
        routerInstance.navigateTo('/');
    } catch (er: any) {
        console.error(er);
        return false;
    }
}
