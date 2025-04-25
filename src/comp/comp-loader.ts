import { LitElement, css, html } from "lit";

export class CompLoader extends LitElement {
    static styles = css`
        loader {
            border: 8px solid gainsboro;
            border-radius: 50%;
            border-top: 8px solid lightblue;
            width: 64px;
            height: 64px;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
            position: absolute;
            z-index: 100;
        }
    `

    render() {
        return html`
            <div class="loader"></div>
        `
    }
}
customElements.define('comp-loader', CompLoader);
