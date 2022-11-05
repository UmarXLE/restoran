$('.clients__inner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

$('#cocktails').hide();
$('#national').hide();

$('.menu__nav a').on('click',function(){
  let food = $(this).attr('href');
  $('.menu__inner section').hide(800);
  $(food).show(800)
  $('.menu__nav a').css('color','black')
  $(this).css('color','red')
})
