/*
// Creates and returns a new makedancer object that can step
var makeDancerr = function(top, left, timeBetweenSteps) {
  var makedancer = {};
  // use jQuery to create an HTML <span> tag
  makedancer.$node = $('<span class="makedancer"></span>');
  makedancer.step = function() {
    // the basic makedancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(makedancer.step, timeBetweenSteps);
  };
  makedancer.step();
  makedancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    makedancer.$node.css(styleSettings);
  };
  // now that we have defined the makedancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  makedancer.setPosition(top, left);
  return makedancer;
};
*/

var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.$node = $('<span class="makedancer"></span>');
  //console.log(this)
  this.step();
  this.setPosition(top, left);
}

makeDancer.prototype.step = function() {
  // make a reference this points to makedancer
  // var t = this;
  // debugger;
  // make a cb function return t.step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //this.makedancer.step();

};

makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//this.makedancer.setPosition(top, left);

// var newInstance = new makeDancer();
