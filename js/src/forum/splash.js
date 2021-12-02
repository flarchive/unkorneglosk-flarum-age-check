import Component from 'flarum/common/Component';

export default class SiteSplash extends Component {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    if( ! this.attrs.enterText ) this.attrs.enterText = "Yes"
    if( ! this.attrs.exitText ) this.attrs.exitText = "No"
    if( ! this.attrs.verifyPrompt ) this.attrs.verifyPrompt = "By clicking enter, I certify that I am over the age of 21 with legal right to cultivate and process cannabis."
    
    // we already hassled them, show noting
    if (sessionStorage.getItem('ageVerify') == 'true') {
        return "";
    }
     
    //we don't know them, prompt with screenblock (from https://codepen.io/amirnaeem/pen/GZmXwr)
    $('.thegoods').addClass("blur")
    return (
      <div class="nonobox">
          <div class="verifybox">
              <div class="verifybox-left">
                
                  <p>This forum is only for use in states where the cultivation and processing of cannabis is legal. </p>
              </div>
              <div class="verifybox-right">
                  <h3>Age Verification</h3>
                  <p>{this.attrs.verifyPrompt}</p>
                  {this.attrs.consentMessage}
                  <button id='consent-enter' class="btn btn-alpha" 
                      onclick={(e)=>{
                          $('.thegoods').removeClass('blur')
                          $('.box').hide();
                          sessionStorage.setItem('ageVerify','true');
                          }} >
                      { this.attrs.enterText}
                  </button>
                  
                  <p class="decor-line"><span>Or</span></p>

                  <button class="btn btn-beta" id="consent-exit" 
                      onclick={(e)=>{
                          window.history.back()
                          }} >
                      {this.attrs.exitText}
                  </button>
                  
                  <small>Always enjoy responsibily.</small>
              </div>
          </div>
      </div>
    );
  }

  oncreate(vnode) {
    super.oncreate(vnode);
  }
}


//m.mount(document.body, <SiteSplash consentMessage="Increment" />);