var BalletDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="balletDancer"></span>');
  this.setPosition(top, left);
};

BalletDancer.prototype = Object.create(Dancer.prototype);
BalletDancer.prototype.constructor = BalletDancer;

BalletDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  //this.$node.toggle(); //do a thing
}

window.dancers.forEach(function(balletDancer) {
  var t = this;
  ('.balletDancer').on('mouseover', function(event) {
    var styleSettings = {
      width: 300,
      height: 300
    };
    t.$node.css(styleSettings);
  });
});