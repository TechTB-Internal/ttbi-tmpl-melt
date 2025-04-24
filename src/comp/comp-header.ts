import { LitElement, css, html } from "lit";

export class CompHeader extends LitElement {
    static styles = css`
        :host {
            position: fixed;
            min-width: 100%;
            height: 64px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items:center;
            border-bottom: 1px solid black;
        }

    `
    render() {
        return html`
            <header>
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
            </header>
        `
    }
}
customElements.define('comp-header', CompHeader);
