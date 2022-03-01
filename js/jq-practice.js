// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!</h1>')
// })

// $(function () {
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
//   $('.box1').slideDown();
//   $('.box1').slideUp();
// });

// $(function () {
//   $('.box1').mouseover(function () {
//     $('.box1').css({ 'background-color': '#0000ff' });
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').css({ 'background-color': '#ff0000' });
//   });
// });

// $(function () {
//   $('.box1').on('click', function () {
//     $('.box1').addClass('ext');
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').removeClass('ext');
//   });
// });

$(function () {
  $('.box1').on('click', function () {
    $(this).slideUp();
  });
});

$(function () {
  $('button').on('click', function () {
    $('ul').children().css('color', 'red');
  });
});