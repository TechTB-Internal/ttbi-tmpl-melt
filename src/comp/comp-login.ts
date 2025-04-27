import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import './comp-loader.ts';

export class CompLogin extends LitElement {
    static styles = css`
        :host {
            font-size: 18px;
        }
        input {
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 16px;
            padding-right: 16px;
            border: 1px solid black;
            border-radius: 8px;
            font-size: inherit;
        }
        button {
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 32px;
            padding-right: 32px;
            border: 1px solid black;
            border-radius: 8px;
            background-color: white;
            color: black;
            font-size: inherit;
            cursor: pointer;
        }
        button:hover {
            background-color: lightblue;
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
        .input_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            gap: 16px;
        }
        .button_container {
            min-height: 64px;
            max-height: 64px;
            min-width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
        }
    `

    @property({ type: Boolean, reflect: true })
    loading = false;

    @property({ attribute: false })
    loginFunc?: (username: string, password: string) => unknown;

    render() {
        return html`
            <div class="box">
                <div class="input_container">
                    <input id="username" type="text" placeholder="username">
                    <input id="password" type="text" placeholder="password">
                </div>
                <div class="button_container">
                    ${this.loading ? this.renderLoader() : this.renderButton()}
                </div>
            </div>
        `;
    }

    private renderButton() {
        return html`
            <button id="submit" type="button" @click="${this.handleClick}">Login</button>
        `;
    }

    private renderLoader() {
        return html`
            <comp-loader></comp-loader>
        `;
    }

    private async handleClick() {
        try {
            const usernameInput = this.renderRoot.querySelector('#username') as HTMLInputElement | null;
            const passwordInput = this.renderRoot.querySelector('#password') as HTMLInputElement | null;
            const username = usernameInput?.value || '';
            const password = passwordInput?.value || '';
            this.loading = true;
            if (typeof this.loginFunc !== 'function') {
                throw new Error('External function is not defined or not a function');
            }
            const result = await this.loginFunc?.(username, password);
            if (!result) {
                this.loading = false;
            }
        } catch (er) {
            console.error(er);
        }
    }
}
customElements.define('comp-login', CompLogin);
