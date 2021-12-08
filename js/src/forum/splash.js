import Component from 'flarum/common/Component';

export default class SiteSplash extends Component {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    if( ! this.attrs.enterText ) this.attrs.enterText = "Oui"
    if( ! this.attrs.exitText ) this.attrs.exitText = "Non"
    if( ! this.attrs.verifyPrompt ) this.attrs.verifyPrompt = "En cliquant sur Oui, vous certifiez avoir plus de 18 ans et être exposé à du contenu possiblement réservé aux personnes majeures."
    
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
                
                  <p>Ce forum est uniquement accessible aux personnes majeures selon la loi française.</p>
              </div>
              <div class="verifybox-right">
                  <h3>Vérification de l'age</h3>
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
                  
                  <small>Merci de votre comphréension</small>
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
