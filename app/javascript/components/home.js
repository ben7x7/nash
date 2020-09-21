import Typed from 'typed.js'

const loadDynamicBannerText = () => {

    new Typed('#banner-typed-text', {
    strings: ["Hello !", "My name is Nash"],
    typeSpeed: 100,
    loop: false
    });
  }



export { loadDynamicBannerText };
