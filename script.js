$(document).ready(function(){

  $(".one").fadeIn(1500);


  $( ".more" ).on( "click", function() {
    $( ".moretext" ).slideToggle();
    $(this).hide();
  } );
  $( ".less" ).on( "click", function() {
    $( ".moretext" ).slideToggle();
    $(".more").fadeIn();
  } );

/* ------ ERASURE ------  */
    $(".b-one").click(function(){
        $(".one").fadeIn(1500);
        $(".one").siblings().hide();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      });

      $(".b-four").click(function(){
        $(".four").fadeIn(1500);
        $(".four").siblings().hide();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      });

      $(".b-three").click(function(){
        $(".three").fadeIn(1500);
        $(".three").siblings().hide();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      });

      $(".b-two").click(function(){
        $(".two").fadeIn(1500);
        $(".two").siblings().hide();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }); 

      $(".circle-black").click(function(){
        $('body').css({'background-color': 'black'}); 
      });

      $(".circle-blue").click(function(){
        $('body').css({'background-color': 'blue'}); 
      });

      $(".circle-white").click(function(){
        $('body').css({'background-color': 'white'}); 
      });

      $(".circle-red").click(function(){
        $('body').css({'background-color': 'red'}); 
      });

      $(".circle-yellow").click(function(){
        $('body').css({'background-color': 'yellow'}); 
      });

/* ------ MAGNiFICATION ------  */

      $('#algeria').zoom({url: '/images/algeria-6.jpg',touch: true});
      $('#arabia').zoom({url: '/images/arabia-6.jpg',touch: true});
      $('#austria').zoom({url: '/images/austria-6.jpg',touch: true});
      $('#bavaria').zoom({url: '/images/bavaria-6.jpg',touch: true});
      $('#belgium').zoom({url: '/images/belgium-6.jpg',touch: true});
      $('#brazil').zoom({url: '/images/brazil-6.jpg',touch: true});
      $('#burmah').zoom({url: '/images/burmah-6.jpg',touch: true});
      $('#canada').zoom({url: '/images/canada-6.jpg',touch: true});
      $('#chili').zoom({url: '/images/chili-6.jpg',touch: true});
      $('#china').zoom({url: '/images/china-6.jpg',touch: true});
      $('#congo').zoom({url: '/images/congo-6.jpg',touch: true});
      $('#corea').zoom({url: '/images/corea-6.jpg',touch: true});
      $('#cuba').zoom({url: '/images/cuba-6.jpg',touch: true});
      $('#denmark').zoom({url: '/images/denmark-6.jpg',touch: true});
      $('#egypt').zoom({url: '/images/egypt-6.jpg',touch: true});
      $('#england').zoom({url: '/images/england-6.jpg',touch: true});
      $('#equador').zoom({url: '/images/equador-6.jpg',touch: true});
      $('#finland').zoom({url: '/images/finland-6.jpg',touch: true});
      $('#french-empire').zoom({url: '/images/french-empire-6.jpg',touch: true});
      $('#germany').zoom({url: '/images/germany-6.jpg',touch: true});
      $('#greece').zoom({url: '/images/greece-6.jpg',touch: true});
      $('#hayti').zoom({url: '/images/hayti-6.jpg',touch: true});
      $('#holland').zoom({url: '/images/holland-6.jpg',touch: true});
      $('#hungary').zoom({url: '/images/hungary-6.jpg',touch: true});
      $('#india').zoom({url: '/images/india-6.jpg',touch: true});
      $('#ireland').zoom({url: '/images/ireland-6.jpg',touch: true});
      $('#italy').zoom({url: '/images/italy-6.jpg',touch: true});
      $('#japan').zoom({url: '/images/japan-6.jpg',touch: true});
      $('#liberia').zoom({url: '/images/liberia-6.jpg',touch: true});
      $('#mexico').zoom({url: '/images/mexico-6.jpg',touch: true});
      $('#morocco').zoom({url: '/images/morocco-6.jpg',touch: true});
      $('#newfoundland').zoom({url: '/images/newfoundland-6.jpg',touch: true});
      $('#norway').zoom({url: '/images/norway-6.jpg',touch: true});
      $('#persia').zoom({url: '/images/persia-6.jpg',touch: true});
      $('#peru').zoom({url: '/images/peru-6.jpg',touch: true});
      $('#poland').zoom({url: '/images/poland-6.jpg',touch: true});
      $('#portugal').zoom({url: '/images/portugal-6.jpg',touch: true});
      $('#republic-of-france').zoom({url: '/images/republic-of-france-6.jpg',touch: true});
      $('#russia').zoom({url: '/images/russia-6.jpg',touch: true});
      $('#sandwich-is').zoom({url: '/images/sandwich-is-6.jpg',touch: true});
      $('#saxony').zoom({url: '/images/saxony-6.jpg',touch: true});
      $('#scotland').zoom({url: '/images/scotland-6.jpg',touch: true});
      $('#servia').zoom({url: '/images/servia-6.jpg',touch: true});
      $('#siam').zoom({url: '/images/siam-6.jpg',touch: true});
      $('#siberia').zoom({url: '/images/siberia-6.jpg',touch: true});
      $('#spain').zoom({url: '/images/spain-6.jpg',touch: true});
      $('#sweden').zoom({url: '/images/sweden-6.jpg',touch: true});
      $('#switzerland').zoom({url: '/images/switzerland-6.jpg',touch: true});









});