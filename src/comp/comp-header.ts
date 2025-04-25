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
        a {
            font-size: 18px;
            text-decoration: none;
            color: black;
        }
        a:hover {
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
                    <a href="/">Home</a>
                    <a href="/dashboard">Dashboard</a>
                </div>
        `
    }
}
customElements.define('comp-header', CompHeader);
