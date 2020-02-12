var ShiftDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="shiftDancer"></span>');
  this.setPosition(top, left);
}

ShiftDancer.prototype = Object.create(Dancer.prototype);
ShiftDancer.prototype.constructor = ShiftDancer;

ShiftDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggle(); //do something
}