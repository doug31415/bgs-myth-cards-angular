angular
  .module("app", ["ngAnimate"])
  .directive("ball", ballDirective)
  .animation(".ball", ballAnimation);

// ========================================================================
//  BALL DIRECTIVE
// ========================================================================
function ballDirective($animate) {

  return {
    restrict: "EA",
    link: function(scope, element, attrs) {

      var radius = element[0].offsetWidth / 2;

      TweenMax.set(element, {
        x: window.innerWidth  / 2 - radius,
        y: window.innerHeight / 2 - radius
      });

      scope.moveBall = function($event) {

        $animate.animate(element, {}, {
          x: $event.pageX - radius,
          y: $event.pageY - radius
        });
      };
    }
  };
}

// ========================================================================
//  BALL ANIMATION
// ========================================================================
function ballAnimation() {

  return {
    animate: function(element, className, from, to, done) {

      TweenMax.to(element, 0.5, {
        x       : to.x,
        y       : to.y,
        ease    : Back.easeOut,
        force3D : true,
        onStart : done
      });

      // Or you could set it up like this and create a new object
      // Extend is helpful if you need to mix a lot of properties
      /*
       var options = angular.extend({}, to, {
       ease    : Back.easeOut,
       force3D : true,
       onStart : done
       });

       TweenMax.to(element, 0.5, options);
       */
    }
  };
}
