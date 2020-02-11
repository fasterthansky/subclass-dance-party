/*
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/
//console.log('hi')

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // console.log('hi')
  makeDancer.call(this, top, left, timeBetweenSteps);
  //console.log('hi')

  // no longer need to keep track of
  // this.blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // var oldStep = this.step;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // reset this to t, for not binding to global
  //var t = this;
  //this.oldStep();
  //this.toggle();
  console.log('hi')
  makeDancer.prototype.step.call(this);
  //console.log('hi')
  this.$node.toggle();
};


