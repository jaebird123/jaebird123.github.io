$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });

  /* type slowly */
  Typed.new('#topnav-text', {
    strings: ["> about_you", "> about_me"],
    typeSpeed: 60
  });
  // Typed.new('#topnav-text', {
  //   strings: ["> research"],
  //   typeSpeed: 60
  // });
});