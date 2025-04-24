import { LitElement, css, html } from "lit";

export class CompDashboard extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            flex-grow: 1;
            font-size: 64px;
        }
    `
    render() {
        return html`<p>Dashboard</p>`
    }
}
customElements.define('comp-dashboard', CompDashboard);
