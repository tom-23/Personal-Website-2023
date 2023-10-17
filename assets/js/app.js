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