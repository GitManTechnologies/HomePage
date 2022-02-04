$(window).mousemove(function(e) {
  $('#cursor div').css({
    left: e.pageX,
    top: e.pageY
  });
});
$('a').on('mouseover', function () {
  $('#cursor div').addClass('active');
});
$('a').on('mouseleave', function () {
  $('#cursor div').removeClass('active');
});