import { LitElement, css, html } from "lit";

export class CompMain extends LitElement {
    static styles = css`
        :host {
            padding-top: 192px;
            display: flex;
            justify-content: center;
            flex: 1;
        }
    `

    render() {
        return html`
            <slot></slot>
        `
    }
}
customElements.define('comp-main', CompMain);
