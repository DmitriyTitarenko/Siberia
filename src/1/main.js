

(function (doc, $) {


    function variant() {

        $('.upper__nav, .bottom__nav').slideUp();
        console.log('Do variant manipulation');

    }

    function event() {

        $(doc).on('click', '.logo__link-img', function (e) {
            $('.upper__nav, .bottom__nav').slideToggle();
            console.log(this);
        });

    }

})(document, jQuery);