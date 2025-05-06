// Wait for DOM to be ready
$(document).ready(function() {
    // Initialize iconizer plugin
    $(".container").iconizer({
      marginTop: 20,
      marginLeft: 20
    });
     // Tab functionality
     $('[role="tab"]').on('click', function() {
      const target = $(this).attr('aria-controls');
      
      // Hide all tab panels
      $('[role="tabpanel"]').attr('hidden', true);
      
      // Show selected tab panel
      $('#' + target).removeAttr('hidden');
      
      // Update tab styles
      $('[role="tab"]').removeClass('active');
      $(this).addClass('active');
  });
        // Add paint icon click handler
        $('.paintIcon').on('click', function() {
          // Find the Art window by its title text and toggle visibility
          $('.title-bar-text:contains("Art")').closest('.window')
              .toggleClass('hidden')
              // Handle 7.css framework's active class
              .toggleClass('active', !$(this).hasClass('hidden'));
      });
      // Add paint icon click handler
      $('.image-Maria').on('click', function() {
        // Find the Art window by its title text and toggle visibility
        $('.image-overlay').toggleClass('hidden')
    });
    $('.image-overlay').on('click', function() {
      $(this).addClass('hidden');
    });
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
  
  