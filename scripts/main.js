var deck = bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: 'li, .bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true,
  forms: true,
  fx: {
    direction: "horizontal",
    transition: "room",
    reverse: false
  }

});




var as = ["move",
          "move-fade",
          "move-both-fade",
          "move-different-easing",
          "scale-down-out-move-in",
          "move-out-scale-up",
          "scale-up-up",
          "scale-down-up",
          "glue",
          "flip",
          "fall",
          "newspaper",
          "push",
          "pull",
          "fold",
          "unfold",
          "room",
          "cube",
          "carousel",
          "sides",
          "slide"
          ];


function randomTransition(slide){
  var r = Math.floor(Math.random()*as.length);
  var tran = as[r];
  slide.setAttribute("data-bespoke-fx-transition", tran);
}

for(var s in deck.slides){
  randomTransition(deck.slides[s]);
}



var bgBase ='images/';
var minId = 1;
var maxId = 35;

var bgs = new Array();

for(i = minId; i <= maxId; i++){
  bgs.push(bgBase + "slence" + i + ".jpg");
}



function selectBackground(event){
  //console.log(event.slide);
  //console.log(event.index); // Index of relevant slide
  var bgCount = bgs.length;
  var r = Math.floor(Math.random()*bgCount);
  var bg = bgs[r];
  //console.log(bg);
  document.body.style.backgroundImage = "url(" + bg + ")";
}

/*
deck.on("activate", function(event) {
  selectBackground(event);
});
*/

deck.on("next", function(event) {
  selectBackground(event);
});

deck.on("prev", function(event) {
  selectBackground(event);
});
