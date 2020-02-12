/*
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = Dancer(top, left, timeBetweenSteps);

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

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // console.log('hi')
  Dancer.call(this, top, left, timeBetweenSteps);
  //console.log('hi')
  // this.step();
  // no longer need to keep track of
  // this.blinkyDancer = Dancer(top, left, timeBetweenSteps);
  // var oldStep = this.step;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // reset this to t, for not binding to global
  //var t = this;
  //this.oldStep();
  //this.toggle();
  Dancer.prototype.step.call(this);
  //console.log('hi')
  this.$node.toggle();
};


