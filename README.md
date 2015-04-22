# ngAnimate
_v1.0.0_
> ngAnimate is simple Angular Directive, which you can easily use animateCss in your Pages 
<br>
<b>Nuget Link:</b> ([ngAnimate]( https://www.nuget.org/packages/AnimateCss/))
<br>
# Dependencies
<b>Nuget Link:</b> ([animate.css]( https://www.nuget.org/packages/animate.css/))
<b>github Link:</b> ([animate.css]( http://daneden.github.io/animate.css/))

```html
<div ng-app="myApp" ng-controller="myCtrl">
        <label>Return Animation from your controller</label>
        <input ng-animate="{{animation}}" ng-model="animation" class="form-control text-center" />
        <label>Return Animation directly</label>
        <input ng-animate="{{'bounce'}}" ng-model="animation2" class="form-control text-center" />
</div>
```

```javaScript
    angular.module("myApp", ["AnimateCss"]).controller("myCtrl", function ($scope) {
        $scope.animation = "@fadeIn";
        $scope.change = function(x) {
            $scope.animation = x;
        }
    });
```

- @: infinite <i>animation duration = unlimited</i>
