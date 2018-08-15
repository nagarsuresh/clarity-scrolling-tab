webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"content-container\">\n    <div class=\"content-area\">\n      <h1>Clarity Tab Container</h1>\n      <clr-tabs class=\"tab-container\">\n        <clr-tab *ngFor=\"let tab of tabs; let i = index;\">\n          <button clrTabLink [clrTabLinkInOverflow]=\"i > 10\">{{tab.label}}</button>\n          <clr-tab-content *clrIfActive>\n            <h1>{{tab.contents}}</h1>\n          </clr-tab-content>\n        </clr-tab>\n      </clr-tabs>\n\n\n      <h1>New Tab Contianer</h1>\n      <sn-tab-group class=\"tab-container\">\n        <sn-tab title=\"{{tab.label}}\" *ngFor=\"let tab of tabs\">\n          <h1>{{tab.contents}}</h1>\n        </sn-tab>\n      </sn-tab-group>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.tab-container {\n  display: block;\n  border: 1px solid #ff9900;\n  height: 300px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.tabs = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 50; i++) {
            this.tabs.push({
                label: "Tab " + (i + 1),
                contents: "This content for Tab " + (i + 1)
            });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clr_angular__ = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tab_group_tab_group_component__ = __webpack_require__("./src/app/tabs/tab-group/tab-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tab_tab_component__ = __webpack_require__("./src/app/tabs/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tab_header_tab_header_component__ = __webpack_require__("./src/app/tabs/tab-header/tab-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tabs_tab_group_tab_group_component__["a" /* TabGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_tab_tab_component__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tabs_tab_header_tab_header_component__["a" /* TabHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__clr_angular__["a" /* ClarityModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tabs/tab-group/tab-group.component.html":
/***/ (function(module, exports) {

module.exports = "<sn-tab-header [tabList]=\"tabList\" (select)=\"selectTab($event)\"></sn-tab-header>\n\n<ng-template #notabs>\n</ng-template>\n\n<ng-container *ngTemplateOutlet=\"tabContents\"></ng-container>"

/***/ }),

/***/ "./src/app/tabs/tab-group/tab-group.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tabs/tab-group/tab-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_tab_component__ = __webpack_require__("./src/app/tabs/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabGroupComponent = /** @class */ (function () {
    function TabGroupComponent() {
    }
    TabGroupComponent.prototype.ngOnInit = function () {
    };
    TabGroupComponent.prototype.ngAfterContentInit = function () {
        if (this.tabList.length === 0) {
            this.tabContents = this.noTabs;
        }
        this.tabContents = this.tabList.first.contents;
    };
    TabGroupComponent.prototype.selectTab = function (index) {
        this.tabContents = this.tabList.toArray()[index].contents;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_0__tab_tab_component__["a" /* TabComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* QueryList */])
    ], TabGroupComponent.prototype, "tabList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_7" /* ViewChild */])('notabs', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* TemplateRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* TemplateRef */])
    ], TabGroupComponent.prototype, "noTabs", void 0);
    TabGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'sn-tab-group',
            template: __webpack_require__("./src/app/tabs/tab-group/tab-group.component.html"),
            styles: [__webpack_require__("./src/app/tabs/tab-group/tab-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabGroupComponent);
    return TabGroupComponent;
}());



/***/ }),

/***/ "./src/app/tabs/tab-header/tab-header.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-icon left-arrow\" (click)=\"scrollTo('left')\" [disabled]=\"disableScrollLeft\">\n  <clr-icon shape=\"angle\" dir=\"left\"></clr-icon>\n</button>\n<div class=\"link-container\" #container>\n  <div class=\"link-list\" #list>\n    <li role=\"presentation\" class=\"nav-item\" *ngFor=\"let tab of tabList; let i = index;\">\n      <button class=\"btn btn-link nav-link\" [ngClass]=\"{'active': i === selectedIndex}\" (click)=\"selectTab(i)\">\n        {{tab.title}}\n      </button>\n    </li>\n  </div>\n</div>\n<button class=\"btn btn-icon right-arrow\" (click)=\"scrollTo('right')\" [disabled]=\"disableScrollRight\">\n  <clr-icon shape=\"angle\" dir=\"right\"></clr-icon>\n</button>"

/***/ }),

/***/ "./src/app/tabs/tab-header/tab-header.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\n.nav-item > button {\n  min-width: 100px; }\n\n.link-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  z-index: 1; }\n\n.link-list {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\n  transition: -webkit-transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out; }\n\n.arrow, .left-arrow, .right-arrow {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 38px;\n          flex: 0 0 38px;\n  cursor: pointer;\n  height: 100%;\n  border: none;\n  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.right-arrow {\n  margin-right: 0; }\n"

/***/ }),

/***/ "./src/app/tabs/tab-header/tab-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabHeaderComponent = /** @class */ (function () {
    function TabHeaderComponent(cd) {
        this.cd = cd;
        this.navClass = true;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectedIndex = 0;
        this.disableScrollRight = false;
        this.disableScrollLeft = false;
        this._scrollDistance = 0;
    }
    Object.defineProperty(TabHeaderComponent.prototype, "scrollDistance", {
        get: function () { return this._scrollDistance; },
        set: function (v) {
            this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
            this._scrollDistanceChanged = true;
            this.checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    TabHeaderComponent.prototype.ngOnInit = function () {
    };
    TabHeaderComponent.prototype.ngAfterContentChecked = function () {
        if (this._scrollDistanceChanged) {
            this.updateTabScrollPosition();
            this._scrollDistanceChanged = false;
            this.checkScrollingControls();
        }
    };
    TabHeaderComponent.prototype.ngAfterViewInit = function () {
        this.checkScrollingControls();
    };
    TabHeaderComponent.prototype.selectTab = function (index) {
        this.selectedIndex = index;
        this.select.emit(index);
    };
    TabHeaderComponent.prototype.scrollTo = function (dir) {
        var viewLength = this.containerEl.nativeElement.offsetWidth;
        this.scrollDistance += (dir === 'left' ? -1 : 1) * viewLength / 2;
    };
    TabHeaderComponent.prototype.getMaxScrollDistance = function () {
        var lengthOfLinksLis = this.listEl.nativeElement.scrollWidth;
        var lengthOfContainer = this.containerEl.nativeElement.offsetWidth;
        return (lengthOfLinksLis - lengthOfContainer) || 0;
    };
    TabHeaderComponent.prototype.updateTabScrollPosition = function () {
        var scrollDistance = this.scrollDistance;
        var translateX = -scrollDistance;
        this.listEl.nativeElement.style.transform = "translateX(" + translateX + "px)";
    };
    TabHeaderComponent.prototype.checkScrollingControls = function () {
        this.disableScrollLeft = this.scrollDistance === 0;
        this.disableScrollRight = this.scrollDistance === this.getMaxScrollDistance();
        this.cd.markForCheck();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.nav'),
        __metadata("design:type", Object)
    ], TabHeaderComponent.prototype, "navClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TabHeaderComponent.prototype, "tabList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], TabHeaderComponent.prototype, "select", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TabHeaderComponent.prototype, "containerEl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('list', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TabHeaderComponent.prototype, "listEl", void 0);
    TabHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sn-tab-header',
            template: __webpack_require__("./src/app/tabs/tab-header/tab-header.component.html"),
            styles: [__webpack_require__("./src/app/tabs/tab-header/tab-header.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], TabHeaderComponent);
    return TabHeaderComponent;
}());



/***/ }),

/***/ "./src/app/tabs/tab/tab.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/tabs/tab/tab.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tabs/tab/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = /** @class */ (function () {
    function TabComponent() {
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */])
    ], TabComponent.prototype, "contents", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sn-tab',
            template: __webpack_require__("./src/app/tabs/tab/tab.component.html"),
            styles: [__webpack_require__("./src/app/tabs/tab/tab.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map