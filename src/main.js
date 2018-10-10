$(document).ready(function () {
  $(document).on('click', '.schedule__list-order a', function (event) {
    event.preventDefault();
    var $index = $(this).parent().index(),
    $city = $('.schedule__list--city---item----link')[$index],
    $date = $('.schedule__list--date---item----link')[$index],
    $cityText = $($city).text(),
    $dateText = $($date).text();
        $('.modal, .overlay').show();
        $('body').addClass("fixed_overlay");
    $('#raceInfo').text($cityText);
    $('#dateInfo').text($dateText);
   
});

$(document).bind("click keydown", function(event) {
closeModal = event.target;
escapeClose = event.which;
if ($(closeModal).hasClass("modal__close") || $(closeModal).hasClass("overlay") || escapeClose == 27) {
      $('.modal, .overlay').hide(); 
    $('body').removeClass("fixed_overlay"); 
  } 

});

  $('.schedule__wrap-list a').mouseover(function () {
    $('.schedule_link').removeClass('hover');
    var $index = $(this).parent().index(),
      $city = $('.schedule__list--city---item----link')[$index],
      $date = $('.schedule__list--date---item----link')[$index],
      $plane = $('.schedule__list--plane---item----link')[$index];
      $order = $('.schedule__list--order---item----link')[$index];
    $($date).addClass('hover');
    $($city).addClass('hover');
    $($plane).addClass('hover');
    $($order).addClass('hover');
 });
 
});