import { LitElement, css, html } from "lit";

export class CompDashboard extends LitElement {
    static styles = css`
        :host {
            font-size: 18px;
        }
        .box {
            min-height: 256px;
            min-width: 384px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            gap: 32px;
            border: 1px solid black;
            border-radius: 8px;
        }

    `
    render() {
        return html`
            <div class="box">
                <h1>Dashboard</h1>
                <h3>You are logged in</h3>
            </div>
        `;
    }
}
customElements.define('comp-dashboard', CompDashboard);
