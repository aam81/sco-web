'use strict'

const app = (function() {
  const emailContact = 'simple.commeorganise@gmail.com'

  const init = function() {
    selectAllEmailBtn();

    window.addEventListener('scroll', function() {
      addClassOnScoll();
    });
  }

  const selectAllEmailBtn = function() {
    const emailsBtn = document.querySelectorAll('.btn-email');
    emailsBtn.forEach(emailBtn => emailBtn.onclick = sendEmail);
  }

  const sendEmail = () => {
    window.location.href = `mailto:${emailContact}?subject=Demande d'information`;
  }

  const addClassOnScoll = () => {
    const scrollPosY = window.scrollY
    const navigation = document.querySelector('.navigation');
    const navigationHeight = navigation.offsetHeight;
    const viewPortWidth = document.documentElement.clientWidth;

    if (viewPortWidth > 1007) { // Equal to the css breakpoint (1025px) without menu bar
      if (scrollPosY > navigationHeight ) {
        navigation.classList.add('fixed-nav');
      } else {
        navigation.classList.remove('fixed-nav');
      }
    }
  }

  window.addEventListener('DOMContentLoaded', init);
}());