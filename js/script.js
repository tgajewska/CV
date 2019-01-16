$(function(){

  $(".smooth-scroll").on('click', 'a', function(event) {
    event.preventDefault();
    let elAttr		= $(this).attr('href');
    $('body,html').animate({
      scrollTop: $(elAttr).offset().top
    }, 700);

  });

  $(window).scroll(function(){
    let windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
    let sectionHeight = $('#section1').outerHeight();

    if (Math.floor(windowTop / sectionHeight) % 2 !== 0) {
      $('.navbar .nav').removeClass("light").addClass("dark");
    }
    else {
      $('.navbar .nav').removeClass("dark").addClass("light");
    }
    $('header .navbar .nav .nav-item .nav-link').each(function(){
      const $href = $(this).attr('href').slice(1);
      if ($(this).hasClass('active')) { $(this).addClass('nav-' + $href); }
      else { $(this).removeClass('nav-' + $href); }
    })
  });

  // const link = document.createElement('a');
  // link.href = url('Teresa_Gajewska_CV.pdf');
  // link.download = 'Teresa_Gajewska_CV.pdf';
  // link.dispatchEvent(new MouseEvent('click'));
  })
