"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Materialize = require('angular2-materialize');
var AppComponent = (function () {
    function AppComponent(elementref) {
        this.elemref = elementref;
    }
    AppComponent.prototype.ngOnInit = function () {
        jQuery(this.elemref.nativeElement).find('#hdiv').append('<h5>|This div is added using DOM query|</h5>');
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        Materialize.toast("Hello Materialize -Angular 2.x RC7", 5000);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"parallax-container\">\n    <div materialize=\"parallax\" class=\"parallax\"><img src=\"http://materializecss.com/images/parallax1.jpg\"></div>\n  </div>\n  <div class=\"section white\">\n      <div class=\"row container\">\n        This is a fixed html <div id=\"hdiv\"></div>\n        <h2 class=\"header\">Parallax</h2>\n        <p class=\"grey-text text-darken-3 lighten-3\">Parallax is an effect where the background content or image  move at a different speed than the foreground content while scrolling.</p>\n        \n       \n    <dropdown></dropdown> \n      \n      <gallery></gallery>\n    \n     </div>\n  </div>\n  <div class=\"parallax-container\">\n    <div materialize=\"parallax\" class=\"parallax\"><img src=\"http://materializecss.com/images/parallax2.jpg\"></div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*Created by Diganta -Tritan Technologies*/
/*Component is an metadata directive
The component acts as an core header file for the entire framework
*/
/*So for UI coding the /app folder will only matter</br> However for any JS config changes look into systemjs.config.js</br>And for TS compiler adjustments change tsconfig.json'*/
//# sourceMappingURL=app.component.js.map