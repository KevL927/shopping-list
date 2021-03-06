$(document).ready(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    //use '+' for clean code on append
    $('.shopping-list').append('<li><span class="shopping-item">' + $('#shopping-list-entry').val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    $('#shopping-list-entry').val('');
    //'$(this)[0].reset();' instead of above
    })

  $('.shopping-list').on('click','.shopping-item-toggle',function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  })
  .on('click','.shopping-item-delete',function(event) {
    $(this).closest('li').remove();
  });
});
