import { routerInstance } from "../../site/router";
import { AuthPayloadModel } from "./auth-payload-model";

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
        const page = document.querySelector('page-home');
        const authPayload = new AuthPayloadModel();
        authPayload.username = username;
        authPayload.password = password;
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authPayload),
        });
        const data = await res.json();
        if (data.success) {
            routerInstance.navigateTo('/dashboard');
            return true;
        }
        page?.error(data.message || `Login failed.`);
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
