// An object literal

var app = {
  navVisible: false,
  navModal: null,
  navBar: null,
  footer: null,
  loadingModal: null,

  init: function () {
    this.navModal = document.getElementById("nav-modal");
    this.navBar = document.getElementById("nav-bar");
    this.footer = document.getElementById("footer");
    this.loadingModal = document.getElementById("loading-modal");
    this.navModal.classList.add("nav-modal-hide");
    this.loadingModal.classList.add("loading-modal-hide");
    setTimeout(() => {
      document.body.classList.add("animate");
    }, 1500);
  },

  scrollTop: function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  toggleNav: function () {
    if (this.isNavVisible() == true) {
      this.hideNav();
    } else {
      this.showNav();
    }
  },

  isNavVisible: function () {
    return this.navModal.classList.contains("nav-modal-show");
  },

  hideNav: function () {
    if (this.navModal.classList.contains("nav-modal-show")) {
      this.navModal.classList.remove("nav-modal-show");
    }
    this.navModal.classList.add("nav-modal-hide");
    setTimeout(() => {
      this.onscrollEvent();
    },1000)
  },

  showNav: function () {
    if (this.navModal.classList.contains("nav-modal-hide")) {
      this.navModal.classList.remove("nav-modal-hide");
    }
    this.navModal.classList.add("nav-modal-show");
    this.transNavbar();
    this.hideFooter();
  },

  onscrollEvent: function (event) {
    if (this.isNavVisible() == true) {
      return;
    }
    if (window.scrollY <= 10 && this.isNavbarTrans() == false) {
      this.transNavbar();
    }
    if (window.scrollY > 10 && this.isNavbarTrans() == true) {
      this.fillNavbar();
    }
    if (window.scrollY <= 10 && this.isFooterVisible() == true) {
      this.hideFooter()
    }
    if (window.scrollY > 10 && this.isFooterVisible() == false) {
      this.showFooter()
    }
    if (window.scrollY <= 100) {

    }
  },

  isNavbarTrans: function () {
    return this.navBar.classList.contains("navbar-transparent");
  },

  transNavbar: function () {
    if (this.navBar.classList.contains("navbar-transparent")) {
      this.navBar.classList.remove("navbar-transparent");
    }
    this.navBar.classList.add("navbar-transparent");
  },

  fillNavbar: function () {
    if (this.navBar.classList.contains("navbar-transparent")) {
      this.navBar.classList.remove("navbar-transparent");
    }
  },

  isFooterVisible: function () {
    return !this.footer.classList.contains("footer-hidden");
  },

  hideFooter: function () {
    if (this.isFooterVisible() == true) {
      this.footer.classList.add("footer-hidden");
    }
  },

  showFooter: function () {
    if (this.isFooterVisible() == false) {
      this.footer.classList.remove("footer-hidden");
    }
  },
};
(function () {
  // your page initialization code here
  // the DOM will be available here
  window.onscroll = () => {
    app.onscrollEvent();
  };
  app.init();
})();

function isScrolledIntoView(element) {
  var rect = element.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}
