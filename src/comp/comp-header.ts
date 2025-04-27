import { LitElement, css, html } from "lit";

export class CompHeader extends LitElement {
    static styles = css`
        :host {
            height: 64px;
            padding-left: 32px;
            padding-right: 32px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid black;
            background-color: lightblue;
            color: black;
        }
        ::slotted(a) {
            font-size: 18px;
            text-decoration: none;
            color: black;
        }
        ::slotted(a:hover) {
            text-decoration: underline;
        }
        ::slotted(button) {
            padding: unset;
            margin: unset;
            font-size: 18px;
            text-decoration: none;
            color: black;
            border: none;
            background-color: unset;
            cursor: pointer;
        }
        ::slotted(button:hover) {
            text-decoration: underline;
        }
        .links {
            display: flex;
            flex-direction: row;
            gap: 16px;
        }
    `
    render() {
        return html`
                <h2>TTBI-TMPL-MELT</h2>
                <div class="links">
                    <slot></slot>
                </div>
        `
    }
}
customElements.define('comp-header', CompHeader);
