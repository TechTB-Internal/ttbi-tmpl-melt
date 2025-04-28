import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import '../../comp/comp-header';
import '../../comp/comp-main';
import '../../comp/comp-login';
import '../../comp/comp-error-box'
import { login } from "../../services/auth/auth-service";

export class PageHome extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        .hidden {
            display: none;
        }
        p {
            color: red;
        }
    `

    @property({ attribute: false, reflect: true })
    errorText = '';

    @property({ attribute: false })
    hidden = true;

    render() {
        return html`
            <comp-header>
            </comp-header>
            <comp-main>
                <comp-login .func="${login}"></comp-login>
                <comp-error-box class="${classMap({ hidden: this.hidden })}"><p>${this.errorText}</p></comp-error-box>
            </comp-main>
        `;
    }

    error(text: string) {
        try {
            this.errorText = text;
            this.hidden = false;
            return;
        } catch (er) {
            console.log(er);
        }
    }
}
customElements.define('page-home', PageHome);
