(function ($) {
    $.fn.extend({
        showText:function () {
            var $this = $(this);
            console.log($this.text());
        }
    });
})(jQuery)