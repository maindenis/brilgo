var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@21.0.5/build/js/utils.js",
    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
	    return "e.g. " + selectedCountryPlaceholder;
	  },
	  showSelectedDialCode : true
  });

});