
setTimeout(function() { 
    var altura = $('.navbar').height();
    $('#caroseuNav').css({ "margin-top": +altura+"px","padding-top": "2rem","padding-botton": "2rem" });
}); 


$('.navbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top - 47;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 900);
});

(function ($, window, document, undefined) {

    "use strict";

    var pluginName = 'slidingNavbar';

    // Create the plugin constructor
    function SlidingNavbar(element, options) {

        this.element = element;
        this.pluginName = pluginName;

        this.defaults = $.fn[pluginName].defaults;

        this.options = $.extend({}, this.defaults, options);

        this.init();

    };

    $.extend(SlidingNavbar.prototype, {

        // Initialization logic
        init: function () {

            this.$element = $(this.element);

            if (this.$element.length === 0) {
                return;
            }

            var lastScrollTop = 0;
            var scrollTolerance = this.options.scrollTolerance;

            var navbarCollapseClass = (this.options.bootstrapVersion === 3) ? '.navbar-collapse.in' : '.navbar-collapse.show';

            var hasScrolled = false;

            // on scroll, let the interval function know the user has scrolled
            $(window).on('scroll', function () {
                hasScrolled = true;
            });

            if (!this.$element.hasClass('navbar')) {
                throw new Error('The ' + pluginName + ' plugin should be applied to a .navbar element.');
                return;
            }

            this.$element.addClass('navbar--slide');

            var scrollOffset = (this.options.scrollOffset === 'auto') ? this.$element.outerHeight() : this.options.scrollOffset;

            console.log('offset: ', scrollOffset);

            // run onScroll() and reset hasScrolled status
            setInterval(function () {

                console.log('set Interval');

                if (hasScrolled) {

                    console.log('has Scrolled');
                    onScroll();
                    hasScrolled = false;
                }
            }, 50);

            var $el = this.$element;

            var plugin = this;

            function onScroll() {

                console.log('onScroll function');

                var currentScrollTop = $(window).scrollTop();

                console.log('lastScrollTop: ', lastScrollTop);
                console.log('currentScrollTop: ', currentScrollTop);
                console.log('scrollTolerance: ', scrollTolerance);
                console.log('scrollOffset: ', scrollOffset);
                console.log('Math.abs(lastScrollTop - sup): ', Math.abs(lastScrollTop - currentScrollTop));

                if (Math.abs(lastScrollTop - currentScrollTop) <= scrollTolerance) {
                    console.log('scrollTolerance');
                    return;
                }

                // when navbar collapse is opened, do nothing  
                if ($el.find(navbarCollapseClass).length) {
                    return;
                }

                if (currentScrollTop > lastScrollTop && currentScrollTop > scrollOffset) {

                    // On Scroll Down
                    if (!$el.hasClass('navbar--slided-up')) {
                        $el.addClass('navbar--slided-up');
                        // TO DO: add some callbacks
                        plugin.options.onSlideUp.call(plugin.element);
                    }

                } else {

                    // On Scroll Up
                    if (currentScrollTop + $(window).height() < $(document).height()) {
                        if ($el.hasClass('navbar--slided-up')) {
                            $el.removeClass('navbar--slided-up');
                            // TO DO: add some callbacks
                            plugin.options.onSlideDown.call(plugin.element);
                        }
                    }

                }

                lastScrollTop = currentScrollTop;

            }

        }

    });

    $.fn[pluginName] = function (options) {

        return this.each(function () {

            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new SlidingNavbar(this, options));

                console.log($(this).data('plugin_' + pluginName));

            }

        });

    };

    // Plugin defaults
    $.fn[pluginName].defaults = {
        bootstrapVersion: 4,        // Bootstrap version that is used
        scrollOffset: 'auto',   // vertical offset in px before element is first slided up (value 'auto' means that the offset will be the element's height),
        scrollTolerance: 10,       // scroll tolerance in px before state changes
        onSlideUp: $.noop,   // callback when navbar is slided up, `navbar element` is `this`
        onSlideDown: $.noop    // callback when navbar is slided down, `navbar element` is `this`
    };

})(jQuery, window, document);

$(document).ready(function () {

    $('.navbar').slidingNavbar({
        scrollTolerance: 10,
        onSlideUp: function () {
            console.log('------- on slide up callback -------');
            console.log('this: ', this);
            console.log('$el: ', $(this));
        },
        onSlideDown: function () {
            console.log('------- on slide down callback -------');
            console.log('this: ', this);
            console.log('$el: ', $(this));
        }
    });
});