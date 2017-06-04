$(document).ready(function(){
  /* toggle menu */
  $("#menu-toggle").click(toggleSideBar)

  /* smooth scrolling. highlight page location in side bar */
  $('#page-content-wrapper').on("scroll", onScroll);
  $('.sidebar-nav > li > a').on('click', smoothScroll);

  /* type slowly */
  Typed.new('#topnav-text', {
    strings: ["> exact_me", "> about_me"],
    typeSpeed: 60
  });
  // Typed.new('#topnav-text', {
  //   strings: ["> research"],
  //   typeSpeed: 60
  // });
});

function toggleSideBar(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
  $('#nav-icon').toggleClass('open');
}

/*
 *   S M O O T H   S C R O L L I N G
 */
function smoothScroll(e) {
  toggleSideBar(e)
  e.preventDefault();
  $(document).off("scroll");

  $('a').each(function () {
    $(this).removeClass('active');
  })
  $(this).addClass('active');

  var target = this.hash,
      menu = target;
  $target = $(target);
  $('#page-content-wrapper').stop().animate({
    'scrollTop': $target.offset().top - 0
  }, 500, 'swing', function () {
    window.location.hash = target;
    $(document).on("scroll", onScroll);
  });
}

function onScroll(event){
  var scrollPos = $(this).scrollTop();
  $('.sidebar-nav > li > a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos + 0 && refElement.position().top + refElement.height() > scrollPos) {
      $('.sidebar-nav > li > a').removeClass("active");
      currLink.addClass("active");
    }
  });
}