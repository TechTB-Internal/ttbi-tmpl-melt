import { LitElement, css, html } from "lit";
import { CompLoader } from "./comp-loader.js";

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
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
        }
    `

    render() {
        return html`
            <div class="box">
                <div class="input_container">
                    <input id="username" type="text" placeholder="username">
                    <input id="password" type="text" placeholder="password">
                </div>
                <div id="button_container">
                    
                </div>
            </div>
        `;
    }

    private templateButton() {
        return html`
            <button id="submit" @click="${this.handleClick}">Login</button>
        `;
    }

    private handleClick() {

    }
}
customElements.define('comp-login', CompLogin);
