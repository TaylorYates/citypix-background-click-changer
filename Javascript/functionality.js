function readMore() {
  $('.readmore').hide();
  $('#show-this-on-click').slideDown();
  $('.readless').show();
}

function readLess() {
  $('.readless').hide();
  $('#show-this-on-click').slideUp();
  $('.readmore').show();
}

function sidebarLearnMore() {
  $('.learnmore').hide();
  $('#learnmoretext').slideDown();
}

// ALTERNATE $(this) FUNCTION
// function showMore() {
//   var parent = $(this).parent();
//   parent.find('.readmore').hide();
//   parent.find('#show-this-on-click').slideDown();
//   parent.find('.readless').show();
// }

function start() {
  $('a').click(function(event){
    event.preventDefault();
  });

  $('.readmore').click(readMore);
  $('.readless').click(readLess);
  $('.learnmore').click(sidebarLearnMore);

  // ALTERNATE $(this) FUNCTION COMMAND
  // // $('.readmore').click(showMore);
}

$(document).ready(start);
