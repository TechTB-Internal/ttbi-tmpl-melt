import { LitElement, css, html } from "lit";
import '../comp/comp-header';
import '../comp/comp-main';
import '../comp/comp-logout-button';
import { logout } from "../util/utils";

export class PageDashboard extends LitElement {
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
            <comp-header>
                <a href="/">Home</a>
                <comp-logout-button .func="${logout}">Logout</comp-logout-button>
            </comp-header>
            <comp-main>
                <div class="box">
                    <h1>Dashboard</h1>
                    <h3>You are logged in</h3>
                </div>
            </comp-main>

        `;
    }
}
customElements.define('page-dashboard', PageDashboard);
