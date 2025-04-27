import { LitElement, css, html } from "lit";
import { property } from 'lit/decorators.js';

export class CompLogoutButton extends LitElement {
    static styles = css`
        button {
            padding: unset;
            margin: unset;
            font-size: 18px;
            text-decoration: none;
            color: black;
            border: none;
            background-color: unset;
            cursor: pointer;
        }
        button:hover {
            text-decoration: underline;
        }

    `

    @property({ attribute: false })
    func?: () => unknown;

    render() {
        return html`
                <button type="button" @click="${this.handleClick}">Logout</button>
        `
    }

    private async handleClick() {
        try {
            if (typeof this.func !== 'function') {
                throw new Error('Function is not defined or not a function');
            }
            await this.func();
        } catch (er) {
            console.error(er);
        }
    }
}
customElements.define('comp-logout-button', CompLogoutButton);
