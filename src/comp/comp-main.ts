import { LitElement, css, html } from "lit";

export class CompMain extends LitElement {
    static styles = css`
        :host {
            padding-top: 192px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            gap: 32px;
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
