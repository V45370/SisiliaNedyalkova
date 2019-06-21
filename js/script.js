        // Adding animations to the sections
        $("section").addClass("wow fadeIn");

        // Animations Init
        new WOW().init();

//Init Lightbox plugin
        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
          event.preventDefault();
          $(this).ekkoLightbox();
      });