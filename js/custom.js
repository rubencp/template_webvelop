
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
  }, { offset: '30%'});


  $("section.numbers").waypoint(
  function() {
    console.log("I am @ section.numbers");
  }, { offset: '30%'});


  $("section.shopify").waypoint(
  function() {
    console.log("I am @ section.shopify");
    $('div.shopify-text').eq(0).animateCss("slideInRight");
    $('div.shopify-text').eq(1).animateCss("slideInLeft");
    $('div.shopify-text').eq(2).animateCss("slideInRight");
  }, { offset: '30%'});

});
 
