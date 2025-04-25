import { LitElement, css, html } from "lit";

export class CompLoader extends LitElement {
    static styles = css`
        :host {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .loader {
            border: 8px solid gainsboro;
            border-radius: 50%;
            border-top: 8px solid lightblue;
            width: 32px;
            height: 32px;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
            position: absolute;
            z-index: 100;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `

    render() {
        return html`
            <div class="loader" role="progressbar" aria-busy="true"></div>
        `
    }
}
customElements.define('comp-loader', CompLoader);
