$(document).ready(function() {
  $('.line-1').marquee({
    //speed in milliseconds of the marquee
    duration: 10000,
    //gap in pixels between the tickers
    gap: 25,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
  });
  $('.line-2').marquee({
    //speed in milliseconds of the marquee
    duration: 10000,
    //gap in pixels between the tickers
    gap: 25,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'right',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
  });
  $('.line-3').marquee({
    //speed in milliseconds of the marquee
    duration: 10000,
    //gap in pixels between the tickers
    gap: 25,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
  });
  $('.line-4').marquee({
    //speed in milliseconds of the marquee
    duration: 10000,
    //gap in pixels between the tickers
    gap: 25,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'right',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
  });

  // $(".bub-1").click(function(){
  //       $('#nav_audio').load();
  //       $('#nav_audio')[0].play();
  //     });
  // function(){
  //     nav_audio.load();
  // });

  var obj = document.createElement("audio");
  obj.src = "./piano-mp3/A0.mp3";
  obj.volume = 0.1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = false;

  $(".bub-1").hover(function() {
    bub_1_hover.play();
    // obj.pause();
  });
  $(".bub-1").click(function() {
    bub_1_click.play();
    // obj.pause();
  });

  $(".bub-2").hover(function() {
    bub_2_hover.play();
    // obj.pause();
  });
  $(".bub-2").click(function() {
    bub_2_click.play();
    // obj.pause();
  });

  $(".bub-3").hover(function() {
    bub_3_hover.play();
    // obj.pause();
  });
  $(".bub-3").click(function() {
    bub_3_click.play();
    // obj.pause();
  });

  $(".bub-4").hover(function() {
    bub_4_hover.play();
    // obj.pause();
  });
  $(".bub-4").click(function() {
    bub_4_click.play();
    // obj.pause();
  });
});
