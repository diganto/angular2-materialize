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
var Dropdown = (function () {
    function Dropdown() {
    }
    Dropdown = __decorate([
        core_1.Component({
            selector: 'dropdown',
            template: "\n     <h3>Dropdown Component</h3>\n    <a materialize=\"dropdown\" class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>\n\n  <!-- Dropdown Structure -->\n  <ul  id='dropdown1' class='dropdown-content'>\n    <li><a href=\"#!\">one</a></li>\n    <li><a href=\"#!\">two</a></li>\n    <li class=\"divider\"></li>\n    <li><a href=\"#!\">three</a></li>\n  </ul>\n        \n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
//# sourceMappingURL=dropdown.component.js.map