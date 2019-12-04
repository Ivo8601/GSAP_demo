//Main functions


gsap.to(".playground", { y: 350, x: 400, duration: 5, repeat: -1 });

/*Ball events
  
  var tl = new TimelineMax({repeat:-1});
  tl.to("#ball", .10, {transformOrigin: "50% 100%", scaleY:0.25, yoyo:true, repeat:1})
    .to("#ball", .35, {y:-300, ease:Circ.easeOut, yoyo:true, repeat:1});
*/

//Ball contained

var ball = document.getElementById('ball'),
	colors = ["#480e6e","#fc4239","#ffd400","#00c4df"];

function play() {

  TweenLite.set(ball, {y:248});

  var tl = new TimelineLite({delay:0});
  tl.to(ball, 0.5, {y:0})
    .to(ball, 1.25, {y:248, ease:Bounce.easeOut})
    .to(ball, 2.5, {x:"+=248"}, "-=1.75")
    .to(ball, 1, {x:0, backgroundColor:colors[ Math.floor(Math.random() * colors.length) ]}, "+=1")
    .call(play);
}
play();
