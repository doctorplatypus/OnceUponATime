// Wait for DOM to be ready
$(document).ready(function() {
    // Initialize iconizer plugin
    $(".container").iconizer({
      marginTop: 20,
      marginLeft: 20
    });
    
    // Your other JavaScript code here
  });
  
  // Iconizer plugin definition
  $.fn.iconizer = function(options) {
    options = $.extend({
      selector: ".icon",
      marginTop: 10,
      marginLeft: 10,
    }, options);
  
    return this.each(function() {
      var $container = $(this),
          $icons = $(options.selector, $container),
          containerHeight = $container.height(),
          iconHeight = $icons.first().height(),
          iconWidth = $icons.first().width(),
          numberFit = Math.floor(containerHeight / (iconHeight + options.marginTop)),
          top = 0,
          left = 0;
  
      $icons.each(function(i) {
        if (i % numberFit === 0 && i > 0) {
          top = 0;
          left += iconWidth + options.marginLeft;
        }
        
        $(this).css({
          top: top + options.marginTop,
          left: left + options.marginLeft
        });
        
        top += iconHeight + options.marginTop;
      });
    });
  };
  
  // Debug function
  function l(e) {
    console.log(e);
  }