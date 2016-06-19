
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

 
$( document ).ready(function() {
    console.log( "ready!" );

 $("section.features").waypoint(
  function() {
    console.log("I am @ section.features");
    $('div.feature').eq(0).animateCss('slideInLeft');
    $('div.feature').eq(1).animateCss('bounce');
    $('div.feature').eq(2).animateCss('bounce');
    $('div.feature').eq(3).animateCss('slideInRight');
  }, { offset: '30%'});


  $("section.testimonials").waypoint(
  function() {
    console.log("I am @ section.testimonials");

  }, { offset: '30%'});



  $("section.webvelop").waypoint(
  function() {
    console.log("I am @ section.webvelop");
    $("section.webvelop p").eq(0).animateCss('slideInLeft');
    $("section.webvelop p").eq(1).animateCss('slideInRight');
    $("section.webvelop p").eq(2).animateCss('slideInLeft');
    $("section.webvelop p").eq(3).animateCss('slideInRight');
    $("section.webvelop p").eq(4).animateCss('slideInLeft');
    $("section.webvelop p").eq(5).animateCss('slideInRight');
  }, { offset: '30%'});


  $("section.numbers").waypoint(
  function() {
    console.log("I am @ section.numbers");
    $("section.numbers").animateCss('fadeInUp');
  }, { offset: '90%'});





  $("div.shopify-one").waypoint(
  function() {
    console.log("I am @ section.shopify 1");
    $('div.shopify-text').eq(0).animateCss("fadeInRight");
    $('div.shopify-image').eq(0).animateCss("fadeInLeft");
  }, { offset: '80%'});


  $("div.shopify-two").waypoint(
  function() {
    console.log("I am @ section.shopify 2");
    $('div.shopify-text').eq(1).animateCss("fadeInLeft");
    $('div.shopify-image').eq(1).animateCss("fadeInRight");
  }, { offset: '80%'});


  $("div.shopify-three").waypoint(
  function() {
    console.log("I am @ section.shopify 3");
    $('div.shopify-text').eq(2).animateCss("fadeInRight");
    $('div.shopify-image').eq(2).animateCss("fadeInLeft");
  }, { offset: '80%'});










});
 
