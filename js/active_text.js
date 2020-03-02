var  mn = $(".active_text");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr 1020 ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});




https://teamtreehouse.com/community/forum-tip-create-a-sticky-navigation-with-css-and-jquery-2