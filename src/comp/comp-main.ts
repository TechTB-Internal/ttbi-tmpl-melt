import { LitElement, css, html } from "lit";

export class CompMain extends LitElement {
    static styles = css`
        :host {
            min-height: 100%;
            min-width: 100%;
            padding-top: 192px;
            display: flex;
            justify-content: center;
        }
    `

    render() {
        return html`
            <slot></slot>
        `
    }
}
customElements.define('comp-main', CompMain);
