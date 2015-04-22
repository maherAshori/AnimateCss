angular.module("AnimateCss", ["ngSanitize"])
    .directive("ngAnimate", function () {
        "use strict";
        return {
            restrict: "A",
            require: "^ngModel",
            scope: {
                ngAnimate: "@"
            },
            link: function (scope, element, attrs, ngModel) {
                var animation, oldV, newV;
                ngModel.$render = function () {
                    scope.ngAnimate = ngModel.$viewValue;
                };
                scope.$watch("ngAnimate", function (newValue, oldValue) {
                    console.log(oldValue);
                    console.log(newValue);
                    if (oldValue.charAt(0) === "@") {
                        oldV = "infinite " + oldValue.substring(1);
                    } else {
                        oldV = oldValue;
                    }
                    if (newValue.charAt(0) === "@") {
                        newV = "infinite " + newValue.substring(1);
                    } else {
                        newV = newValue;
                    }
                    element.removeClass(oldV);
                    scope.ngAnimate = newV;
                    if (scope.ngAnimate.charAt(0) === "@") {
                        animation = "infinite " + scope.ngAnimate.substring(1);
                    } else {
                        animation = scope.ngAnimate;
                    }
                    scope.inProggress = animation;
                    element.addClass("animated " + animation);
                });
            }
        };
    });
