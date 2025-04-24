import { LitElement, css, html } from "lit";

export class CompMain extends LitElement {
    static styles = css`
        :host {
            min-height: 100%;
            min-width: 100%;
            padding-top: 64px;
            display: flex;
            justify-content: center;
        }
    `

    render() {
        return html`
            <main>
                <slot></slot>
            </main>
        `
    }
}
customElements.define('comp-main', CompMain);
