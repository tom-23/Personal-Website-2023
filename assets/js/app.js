// An object literal
var app = {
  init: function() {
    app.functionOne();
    document.getElementById("currentYear").innerText = new Date().getFullYear();
  },
  functionOne: function () {
  },
  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  },
  onscrollEvent: function(event) {
    if (!isScrolledIntoView(document.getElementById("mainHero"))) {
      document.getElementById("navbar").classList.remove("hidden");
      document.getElementById("navbar").classList.add("visible");
    } else {
      document.getElementById("navbar").classList.remove("visible");
      document.getElementById("navbar").classList.add("hidden");
    }
    console.log(isScrolledIntoView(document.getElementById("mainHero")));
    console.log(scrollY);
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