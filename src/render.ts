import './comp/comp-header.js';
import './comp/comp-main.js';
import './comp/comp-home.js';
import './comp/comp-dashboard.js';

export function renderPageBaseline() {
    console.log(`renderPageBaseline`)
    if (!document.querySelector('comp-header') || !document.querySelector('comp-main')) {
        console.log(`here`)
        const header: Element = document.createElement('comp-header');
        const main: Element = document.createElement('comp-main');
        document.body.replaceChildren();
        document.body.appendChild(header);
        document.body.appendChild(main);
    }
}

export function renderHome() {
    const main:  Element | null = document.querySelector('comp-main');
    const home: Element = document.createElement('comp-home');
    main?.replaceChildren(home);
}

export function renderDashboard() {
    const main:  Element | null = document.querySelector('comp-main');
    const dashboard: Element = document.createElement('comp-dashboard');
    main?.replaceChildren(dashboard);
}
