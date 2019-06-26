$(document).ready(function () {
    $('.filter-button[filter]').click(function () {
       if ($(this).attr('val') == 'off') {
          $('.filter-button[filter]').attr('val', 'off').removeClass('focused');
          $(this).attr('val', 'on').addClass('focused');
          $('.filter > li').hide(300);
          $('.filter > li[filter=' + $(this).attr('filter') + ']').show(300);
          if ($(this).attr('filter') == 'all') {
             $('filter-button[filter]').attr('val', 'off').removeClass('focused');
             $(this).attr('val', 'on').addClass('focused');
             $('.filter > li').show(300);
          }
       }
    });
    $('.blog__button').click(function () {
        $('li').removeClass('d-none');
    });
});