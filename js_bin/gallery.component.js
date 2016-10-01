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
var Gallery = (function () {
    function Gallery() {
    }
    Gallery = __decorate([
        core_1.Component({
            selector: 'gallery',
            template: "\n    <h3>Materialize Carousel Component</h3>\n    <div materialize=\"carousel\" class=\"carousel\">\n    <a class=\"carousel-item\" href=\"#one!\"><img src=\"http://lorempixel.com/250/250/nature/1\"></a>\n    <a class=\"carousel-item\" href=\"#two!\"><img src=\"http://lorempixel.com/250/250/nature/2\"></a>\n    <a class=\"carousel-item\" href=\"#three!\"><img src=\"http://lorempixel.com/250/250/nature/3\"></a>\n    <a class=\"carousel-item\" href=\"#four!\"><img src=\"http://lorempixel.com/250/250/nature/4\"></a>\n    <a class=\"carousel-item\" href=\"#five!\"><img src=\"http://lorempixel.com/250/250/nature/5\"></a>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Gallery);
    return Gallery;
}());
exports.Gallery = Gallery;
/*Created by Diganto Datta
-Property of Tritan Technologies

**/ 
//# sourceMappingURL=gallery.component.js.map