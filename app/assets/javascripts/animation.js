console.clear();
var quotes = $(".quote");
var dur = 0.1;
var stagger = 0.1;
var pause = 1; // quote static time
var overlap = 0; // next animation start overlap
var positionParam = 0;
var master = new TimelineMax({paused:true, repeat:0});
TweenMax.set(quotes, {autoAlpha:1});

for (var k = 0; k < quotes.length; k++) {
  var tl = new TimelineMax();  
  var mySplitText = new SplitText(quotes[k], {type:"chars, words"});
  tl.staggerFrom(mySplitText.words, dur, {x: -50, opacity: 0}, stagger);
  tl.staggerTo(mySplitText.words, dur, {x: 0, opacity: 1}, stagger, "+=" + pause);
  master.add(tl, positionParam);
  positionParam += tl.duration() - overlap;
}
master.play();
