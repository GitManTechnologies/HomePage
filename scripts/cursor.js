$(window).mousemove(function(e) {
  $('#cursor div').css({
    left: e.pageX,
    top: e.pageY
  });
});
$('a').on('mouseenter', function () {
  $('#cursor div').removeClass('poionter');
  $('#cursor div').addClass('active');
});
$('a').on('mouseleave', function () {
  $('#cursor div').removeClass();
});
$('.news').on('mouseenter', function () {
  $('#cursor div').removeClass('active');
  $('#cursor div').addClass('pointer');
});
$('.news').on('mouseleave', function () {
  $('#cursor div').removeClass();
});
$('.members').on('mouseenter', function () {
  $('#cursor div').removeClass('active');
  $('#cursor div').addClass('pointer');
});
$('.members').on('mouseleave', function () {
  $('#cursor div').removeClass();
});
$('.fnc-nav__control').on('mouseenter', function () {
  $('#cursor div').removeClass('poionter');
  $('#cursor div').addClass('active');
});
$('.fnc-nav__control').on('mouseleave', function () {
  $('#cursor div').removeClass();
});