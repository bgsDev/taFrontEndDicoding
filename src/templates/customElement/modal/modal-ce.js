/* eslint-disable linebreak-style */
class modalce extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  set modal1(_cev) {
    this.idx = _cev.idx;
    // console.log('connected!');
    this.exModal1();
  }

  // eslint-disable-next-line class-methods-use-this
  cssModal1() {
    return `
          <style>
            #${this.idx} {
                display: none; /* Hidden by default */
                position: fixed; /* Stay in place */
                z-index: 1; /* Sit on top */
                left: 0;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgb(0,0,0); /* Fallback color */
                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            }
            #${this.idx} .content {
                background-color: #fefefe;
                margin: 15% auto; /* 15% from the top and centered */
                padding: 0px;
                border: 1px solid #888;
                width: 80%; /* Could be more or less, depending on screen size */
                display : grid;
                grid-template-columns: 1fr;
                grid-template-rows: 20% 50% 20%;
                max-width: 600px;
            }
            #${this.idx} .content .header{
              display : grid;
              flex-grow: 2;
              font-size:15px;
              grid-template-columns : 90% 10%;
              align-items: center;
            }
            #${this.idx} .content .header .title{
              font-size:20px;
              margin-left: 10%;
              font-weight: bold;
            }
            #${this.idx} .content .header .close {
              color: #aaa;
              font-size: 28px;
              font-weight: bold;
              width: 20%;
              background: none;
          }

            #${this.idx} .content .body{
              padding: 20px; 
              border-top: 1px solid #888;
            }
            #${this.idx} .content .footer{
              padding: 10px; 
              border-top: 1px solid #888;
              display : grid;
              text-align: end;
            }

            #${this.idx} .content .close:hover,
            #${this.idx} .content .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
          </style>
        `;
  }

  exModal1() {
    // this.attachShadow({ mode: 'open' });
    this.innerHTML = `
            ${this.cssModal1()}
            <div id="${this.idx}">
                <div class="content" id="bmodalContent">
                  <div class="header">
                    <h3 class="title" id="bmodalTitle">Modal title</h3>
                    <div class="">  
                      <button class="close" id="bmodalClose">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>
                  <div class="body" id="bmodalBody">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="footer" id="bmodalfooter">
                    <div id="btnFooter">  
                      <button type="button" class="btn btn-primary">Save changes</button>
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
            </div>
        `;
  }
}
customElements.define('modal-ce', modalce);
