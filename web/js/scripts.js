if (typeof pistol88 == "undefined" || !pistol88) {
    var pistol88 = {};
}

pistol88.service = {
    init: function() {
        $(document).on('click', '.service-prices-table td.price input', function() {
            $(this).select();
        });
        
        $(document).on('keypress', '.service-prices-table td.price input', function(e) {
            if(e.which == 13) {
                $(this).siblings('.pistol88-cart-buy-button').click();
            }
        });
        
        $(document).on('mouseenter','.service-prices-table td', this.renderCross);
        $(document).on('click', '.pistol88-cart-buy-button', this.addToCart);
        
        $(document).on('mouseleave','.service-prices-table td',function () {
            $('.service-prices-table td').removeClass('hover');
        });
        
    },
    renderCross: function () {
        console.log('renderCross');
        var tr = $(this).parent('tr');
        var Col = tr.find('td').index(this);

        tr.find('td').addClass('hover');
        $('.service-prices-table tr').find('td:eq(' + Col + ')').addClass('hover');
    },
    addToCart: function(e) {
        console.log('addToCart');
        $(this).data('price', $(this).siblings('input').val());
        
        $(this).siblings('input').val($(this).siblings('input').data('base-price'));
        
        var x = e.pageX;
        
        if(x) {
            var y = e.pageY;

            var cart_pos = $('.pistol88-cart-informer').offset();

            $('.pistol88-cart-informer').css('opacity','0.3');

            $('<div class="service_tocart_point"></div>')
                .appendTo($('body'))
                .css(
                    {
                        'position': 'absolute',
                        'display': 'block',
                        'margin-top': '-20px',
                        'z-index': '1500',
                        'left': x,
                        'top': y,
                        'opacity': '0.9'
                    })
                .animate(
                    {
                        'top': cart_pos.top+52,
                        'left': cart_pos.left+3,
                        'opacity': '0.5'
                    },
                    1100,
                    function() {
                        $('.pistol88-cart-informer').css('opacity','1');jQuery(this).remove();
                    });
        }
        return true;
    }
}

pistol88.service.init();
