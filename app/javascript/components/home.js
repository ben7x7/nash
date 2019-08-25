import Typed from 'typed.js'

const loadDynamicBannerText = () => {

    new Typed('#banner-typed-text', {
    strings: ["Wake up Steve !", "Nash is watching you"],
    typeSpeed: 100,
    loop: false
    });
  }



export { loadDynamicBannerText };
