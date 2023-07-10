class AppView extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
           :host {
                display: block;
                border-radius:0px 0px 120px 0px;
                width: 100%;
                height: 200px;
                background: #10A19D;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
               padding: 16px;
               font-size: 30px;
               color:#540375;
            }
            h6 {
                padding-left: 20px;
                font-size: 15px;
            }
        </style>
<h2>What You Gonna Cook ? </h2>
        `;
    }
}
customElements.define("app-bar", AppView);