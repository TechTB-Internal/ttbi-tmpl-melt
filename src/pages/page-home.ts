import { LitElement, html, css } from "lit";
import '../comp/comp-header';
import '../comp/comp-main';
import '../comp/comp-login';
import { login } from "../util/utils";

export class PageHome extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            flex: 1;
        }
    `

    render() {
        return html`
            <comp-header></comp-header>
            <comp-main>
                <comp-login .loginFunc="${login}"></comp-login>
            </comp-main>
        `;
    }
}
customElements.define('page-home', PageHome);
