import { LitElement, css, html } from "lit";

export class CompErrorBox extends LitElement {
    static styles = css`
    :host {
        font-size: 18px;
    }
    .box {
        min-height: 128px;
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
    `

    render() {
        return html`
                <div class="box">
                    <slot></slot>
                </div>
        `
    }
}
customElements.define('comp-error-box', CompErrorBox);
