// An object literal


var app = {

  navVisible: false,
  navModal: null,
  loadingModal: null,

  init: function() {
    this.navModal = document.getElementById('nav-modal');
    this.loadingModal = document.getElementById('loading-modal');
    this.navModal.classList.add('nav-modal-hide');
    this.loadingModal.classList.add('loading-modal-hide');
    setTimeout(() => {
      document.body.classList.add('animate');
    }, 1500);
  },

  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  },

  toggleNav: function() {
    if (this.isNavVisible() == true) {
      this.hideNav();
    } else {
      this.showNav();
    }
  },
  
  isNavVisible: function() {
    return this.navModal.classList.contains("nav-modal-show");
  },

  hideNav: function() {
    if (this.navModal.classList.contains("nav-modal-show")) {
      this.navModal.classList.remove("nav-modal-show")
    }
    this.navModal.classList.add('nav-modal-hide');
  },

  showNav: function() {
    if (this.navModal.classList.contains("nav-modal-hide")) {
      this.navModal.classList.remove("nav-modal-hide")
    }
    this.navModal.classList.add('nav-modal-show');
  },

  onscrollEvent: function(event) {

  }
};
(function() {
  // your page initialization code here
  // the DOM will be available here
  window.onscroll = app.onscrollEvent;
  app.init();
})();

function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}