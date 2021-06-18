//Fungsi Scrool Smooth
  $(function(){
    var scroll = new SmoothScroll('a[href*="#section-"]',{
      speed: 1000,
    });
  })

  
// Scrol otomatis saat link di klik
$('.page-scroll').on('click', function(e){

  var tujuan = $(this).attr('href');

  var elemenTujuan = $(tujuan);
  
  $('body').animate({
    scrollTop: elemenTujuan.offset(). top - 100
  }, 1250, 'swing');
  
  e.preventDefault();


});


function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

