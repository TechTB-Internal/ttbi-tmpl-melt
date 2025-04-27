import { LitElement, html, css } from "lit";
import '../comp/comp-header';
import '../comp/comp-main';
import '../comp/comp-login';
import '../comp/comp-error-box'
import { login } from "../util/utils";

export class PageHome extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex: 1;
        }
    `

    render() {
        return html`
            <comp-header>
            </comp-header>
            <comp-main>
                <comp-login .func="${login}"></comp-login>
                <comp-error-box></comp-error-box>
            </comp-main>
        `;
    }
}
customElements.define('page-home', PageHome);
