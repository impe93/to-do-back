webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aggiungi-task/aggiungi-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#aggiungi-task {\n  margin-top: calc(20px + 2vw);\n  margin-bottom: calc(20px + 2vw);\n}\n\n#paragrafo-errore {\n  color: red;\n  font-size: 12px;\n}\n\nbutton {\n  width: 100%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aggiungi-task/aggiungi-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"aggiungi-task\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-9 mb-3\">\n      <input [(ngModel)]=\"nuovoTask\" id=\"nuovoTask\" type=\"text\" class=\"form-control\" placeholder=\"Inserisci un nuovo task\">\n      <p id=\"paragrafo-errore\" *ngIf=\"invalido\">Inserire un task valido, il nuovo task deve contenere almeno un carattere.</p>\n    </div>\n    <div class=\"col-md-3\">\n      <button (click)=\"inserisciTask()\" class=\"btn btn-primary\">Aggiungi Attività!</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/aggiungi-task/aggiungi-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AggiungiTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AggiungiTaskComponent = /** @class */ (function () {
    function AggiungiTaskComponent() {
        this.aggiuntaTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.nuovoTask = '';
        this.invalido = false;
    }
    AggiungiTaskComponent.prototype.ngOnInit = function () { };
    AggiungiTaskComponent.prototype.inserisciTask = function () {
        if (this.nuovoTask.trim() !== '') {
            this.aggiuntaTask.emit(this.nuovoTask);
            this.invalido = false;
        }
        else {
            this.invalido = true;
        }
        this.nuovoTask = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AggiungiTaskComponent.prototype, "aggiuntaTask", void 0);
    AggiungiTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aggiungi-task',
            template: __webpack_require__("../../../../../src/app/aggiungi-task/aggiungi-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aggiungi-task/aggiungi-task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AggiungiTaskComponent);
    return AggiungiTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SlideInOutWithMarginAnimation; });
/* unused harmony export FlyInOut */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideInOutAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var SlideInOutWithMarginAnimation = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('slideInOutWithMargin', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            'max-height': '500px',
            'opacity': '1',
            'visibility': 'visible',
            'margin-top': '10px'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            'max-height': '0px',
            'opacity': '0',
            'visibility': 'hidden',
            'margin-top': '0px'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('in => out', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('450ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'max-height': '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('550ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'visibility': 'hidden'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('220ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'margin-top': '0px'
                }))
            ])]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('out => in', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'visibility': 'visible'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'max-height': '500px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'opacity': '1'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('100ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'margin-top': '10px'
                }))
            ])])
    ]),
];
var FlyInOut = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('flyInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(100)
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ])
];
var SlideInOutAnimation = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('slideInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            'max-height': '500px',
            'opacity': '1',
            'visibility': 'visible'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => void', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('450ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'max-height': '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('550ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'visibility': 'hidden'
                }))
            ])]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'visibility': 'visible'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'max-height': '500px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'opacity': '1'
                }))
            ])])
    ]),
];


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_cose_da_fare_lista_cose_da_fare_component__ = __webpack_require__("../../../../../src/app/lista-cose-da-fare/lista-cose-da-fare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_lista_component__ = __webpack_require__("../../../../../src/app/lista/lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagina_non_trovata_pagina_non_trovata_component__ = __webpack_require__("../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__lista_cose_da_fare_lista_cose_da_fare_component__["a" /* ListaCoseDaFareComponent */] },
    { path: 'pagina-non-trovata', component: __WEBPACK_IMPORTED_MODULE_4__pagina_non_trovata_pagina_non_trovata_component__["a" /* PaginaNonTrovataComponent */] },
    { path: ':tipoLista', component: __WEBPACK_IMPORTED_MODULE_3__lista_lista_component__["a" /* ListaComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'pagina-non-trovata' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#esterno {\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  padding: 0px;\n}\n\nnav {\n  width: 100%;\n}\n\nfooter {\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n}\n\n#copyright {\n  text-align: center;\n  margin: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"esterno\" class=\"container\">\n\n\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">To-Do App</a>\n    <button class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n            routerLinkActive=\"active\"\n            routerLink=\"/\">Da fare</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n            routerLinkActive=\"active\"\n            routerLink=\"/completate\">Completate</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n            routerLinkActive=\"active\"\n            routerLink=\"/eliminate\">Eliminate</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n  <footer>\n    <p id=\"copyright\">To Do di Lorenzo Imperatrice per il blog <a href=\"https://www.lorenzoimperatrice.it\">www.lorenzoimperatrice.it</a></p>\n  </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lista_cose_da_fare_lista_cose_da_fare_component__ = __webpack_require__("../../../../../src/app/lista-cose-da-fare/lista-cose-da-fare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aggiungi_task_aggiungi_task_component__ = __webpack_require__("../../../../../src/app/aggiungi-task/aggiungi-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elemento_lista_elemento_lista_component__ = __webpack_require__("../../../../../src/app/elemento-lista/elemento-lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lista_lista_component__ = __webpack_require__("../../../../../src/app/lista/lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attivita_attivita_component__ = __webpack_require__("../../../../../src/app/attivita/attivita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pagina_non_trovata_pagina_non_trovata_component__ = __webpack_require__("../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lista_cose_da_fare_lista_cose_da_fare_component__["a" /* ListaCoseDaFareComponent */],
                __WEBPACK_IMPORTED_MODULE_8__aggiungi_task_aggiungi_task_component__["a" /* AggiungiTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_9__elemento_lista_elemento_lista_component__["a" /* ElementoListaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__lista_lista_component__["a" /* ListaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__attivita_attivita_component__["a" /* AttivitaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pagina_non_trovata_pagina_non_trovata_component__["a" /* PaginaNonTrovataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__task_service__["a" /* TaskService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/attivita/attivita.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attivita/attivita.component.html":
/***/ (function(module, exports) {

module.exports = "<a [ngClass]=\"setClass()\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n  <div class=\"d-flex w-100 justify-content-between align-items-end flex-wrap-reverse\">\n    <h5>{{ indice + 1 }}. {{ task.testo }}</h5>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Task\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"ripristinaTask()\">Ripristina</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"rimuoviTask()\">Rimuovi</button>\n    </div>\n  </div>\n</a>\n"

/***/ }),

/***/ "../../../../../src/app/attivita/attivita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttivitaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttivitaComponent = /** @class */ (function () {
    function AttivitaComponent() {
        this.ripristinoTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.rimozioneTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AttivitaComponent.prototype.ngOnInit = function () { };
    AttivitaComponent.prototype.rimuoviTask = function () {
        this.rimozioneTask.emit({
            _id: this.task._id,
            indice: this.indice
        });
    };
    AttivitaComponent.prototype.ripristinaTask = function () {
        this.task.stato = 'in_corso';
        this.ripristinoTask.emit({
            _id: this.task._id,
            indice: this.indice
        });
    };
    AttivitaComponent.prototype.setClass = function () {
        var classe = {
            'list-group-item-success': this.task.stato === 'completato',
            'list-group-item-danger': this.task.stato === 'eliminato'
        };
        return classe;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AttivitaComponent.prototype, "ripristinoTask", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AttivitaComponent.prototype, "rimozioneTask", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AttivitaComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], AttivitaComponent.prototype, "indice", void 0);
    AttivitaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-attivita',
            template: __webpack_require__("../../../../../src/app/attivita/attivita.component.html"),
            styles: [__webpack_require__("../../../../../src/app/attivita/attivita.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttivitaComponent);
    return AttivitaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/elemento-lista/elemento-lista.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#task-modificato {\n  margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/elemento-lista/elemento-lista.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n  <div class=\"d-flex w-100 justify-content-between align-items-end flex-wrap-reverse\">\n    <h5>{{ indice + 1 }}. {{ task.testo }}</h5>\n    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Task\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"iniziaModifica()\">Modifica</button>\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"completaTask()\">Completa</button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"eliminaTask()\">Elimina</button>\n    </div>\n  </div>\n  <div [@slideInOutWithMargin]=\"animationStateCampoModifica\" id=\"campo-modifica\" class=\"d-flex w-100 justify-content-between align-items-end\">\n      <input [(ngModel)]=\"testoTaskModificato\" id=\"task-modificato\" type=\"text\" class=\"form-control\" placeholder=\"Modifica il task\">\n      <button (click)=\"inviaModifica()\" class=\"btn btn-primary\">Modifica</button>\n  </div>\n</a>\n"

/***/ }),

/***/ "../../../../../src/app/elemento-lista/elemento-lista.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementoListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElementoListaComponent = /** @class */ (function () {
    function ElementoListaComponent() {
        this.modificaTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.eliminazioneTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.completamentoTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.testoTaskModificato = '';
        this.animationStateCampoModifica = 'out';
        this.animationStateComponent = 'in';
    }
    ElementoListaComponent.prototype.ngOnInit = function () { };
    ElementoListaComponent.prototype.iniziaModifica = function () {
        this.animationStateCampoModifica = this.animationStateCampoModifica === 'in' ? 'out' : 'in';
    };
    ElementoListaComponent.prototype.inviaModifica = function () {
        if (this.testoTaskModificato.trim() !== '') {
            this.modificaTask.emit({
                _id: this.task._id,
                indice: this.indice,
                testo: this.testoTaskModificato
            });
        }
        this.testoTaskModificato = '';
    };
    ElementoListaComponent.prototype.eliminaTask = function () {
        if (this.task.stato === 'in_corso') {
            this.task.stato = 'eliminato';
            this.eliminazioneTask.emit({
                _id: this.task._id,
                indice: this.indice
            });
        }
    };
    ElementoListaComponent.prototype.completaTask = function () {
        if (this.task.stato === 'in_corso') {
            this.task.stato = 'completato';
            this.completamentoTask.emit({
                _id: this.task._id,
                indice: this.indice
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ElementoListaComponent.prototype, "modificaTask", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ElementoListaComponent.prototype, "eliminazioneTask", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ElementoListaComponent.prototype, "completamentoTask", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ElementoListaComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ElementoListaComponent.prototype, "indice", void 0);
    ElementoListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-elemento-lista',
            template: __webpack_require__("../../../../../src/app/elemento-lista/elemento-lista.component.html"),
            styles: [__webpack_require__("../../../../../src/app/elemento-lista/elemento-lista.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["b" /* SlideInOutWithMarginAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], ElementoListaComponent);
    return ElementoListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lista-cose-da-fare/lista-cose-da-fare.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2,\nh1 {\n  text-align: left;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nh1 {\n  text-align: center;\n  margin-top: calc(20px + 3vw);\n}\n\nh2 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#lista-completati,\n#lista-eliminati,\n#lista-attivi {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.bottone-rimozione {\n  margin: 20px;\n  margin-top: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lista-cose-da-fare/lista-cose-da-fare.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>La mia lista delle cose da fare</h1>\n\n<app-aggiungi-task (aggiuntaTask)=\"aggiuntaTask($event)\"></app-aggiungi-task>\n\n<h2 *ngIf=\"tasks.length >= 1\">Attività attive</h2>\n<div id=\"lista-attivi\" class=\"list-group\">\n  <app-elemento-lista\n  *ngFor=\"let task of tasks; let i=index\"\n  [task]=\"task\"\n  [indice]=\"i\"\n  (modificaTask)=\"modificaTask($event)\"\n  (eliminazioneTask)=\"completaEliminaTask($event)\"\n  (completamentoTask)=\"completaEliminaTask($event)\"></app-elemento-lista>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lista-cose-da-fare/lista-cose-da-fare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaCoseDaFareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaCoseDaFareComponent = /** @class */ (function () {
    function ListaCoseDaFareComponent(taskService) {
        this.taskService = taskService;
        this.tasks = [];
        this.animationStateListaAttivi = 'in';
    }
    ListaCoseDaFareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTaskDaFare()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    ListaCoseDaFareComponent.prototype.aggiuntaTask = function (testo) {
        var _this = this;
        this.taskService.aggiungiNuovoTask(testo)
            .subscribe(function (task) {
            if (task) {
                _this.tasks.push(task);
            }
        });
    };
    ListaCoseDaFareComponent.prototype.modificaTask = function (messaggio) {
        var _this = this;
        this.taskService.aggiornaTask(messaggio._id, '', messaggio.testo)
            .subscribe(function (task) {
            if (task) {
                _this.tasks[messaggio.indice] = task;
            }
        });
    };
    ListaCoseDaFareComponent.prototype.completaEliminaTask = function (messaggio) {
        var _this = this;
        this.taskService.aggiornaTask(messaggio._id, this.tasks[messaggio.indice].stato)
            .subscribe(function (task) {
            if (task) {
                _this.tasks.splice(messaggio.indice, 1);
            }
        });
    };
    ListaCoseDaFareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lista-cose-da-fare',
            template: __webpack_require__("../../../../../src/app/lista-cose-da-fare/lista-cose-da-fare.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lista-cose-da-fare/lista-cose-da-fare.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* SlideInOutAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]])
    ], ListaCoseDaFareComponent);
    return ListaCoseDaFareComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lista/lista.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2,\nh1 {\n  text-align: left;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nh1 {\n  text-align: center;\n  margin-top: calc(20px + 3vw);\n}\n\nh2 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#lista {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.bottone-rimozione {\n  margin: 20px;\n  margin-top: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lista/lista.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Attività {{ listaAttuale }}</h2>\n  <button (click)=\"rimuoviEliminateCompletate()\" class=\"btn btn-primary bottone-rimozione\">Rimuovi tutte</button>\n  <div id=\"lista\" class=\"list-group\">\n    <app-attivita\n      *ngFor=\"let task of tasks; let i=index\"\n      [indice]=\"i\"\n      [task]=\"task\"\n      (rimozioneTask)=\"rimuoviTask($event)\"\n      (ripristinoTask)=\"ripristinaTask($event)\"></app-attivita>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lista/lista.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaComponent = /** @class */ (function () {
    function ListaComponent(route, router, taskService) {
        this.route = route;
        this.router = router;
        this.taskService = taskService;
        this.tasks = [];
        this.listaAttuale = '';
    }
    ListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasks$ = this.route.paramMap
            .switchMap(function (params) {
            if (params.get('tipoLista') === 'eliminate') {
                _this.listaAttuale = 'eliminate';
                return _this.taskService.getTaskCancellati();
            }
            else if (params.get('tipoLista') === 'completate') {
                _this.listaAttuale = 'completate';
                return _this.taskService.getTaskCompletati();
            }
            else {
                _this.router.navigate(['/pagina-non-trovata']);
            }
            return null;
        })
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    ListaComponent.prototype.rimuoviEliminateCompletate = function () {
        var _this = this;
        if (this.listaAttuale === 'eliminate') {
            this.taskService.rimuoviTaskCancellati()
                .subscribe(function (message) {
                if (message) {
                    _this.tasks = [];
                }
            });
        }
        else if (this.listaAttuale === 'completate') {
            this.taskService.rimuoviTaskCompletati()
                .subscribe(function (message) {
                if (message) {
                    _this.tasks = [];
                }
            });
        }
    };
    ListaComponent.prototype.rimuoviTask = function (messaggio) {
        var _this = this;
        this.taskService.rimuoviTask(messaggio._id)
            .subscribe(function (message) {
            if (message) {
                _this.tasks.splice(messaggio.indice, 1);
            }
        });
    };
    ListaComponent.prototype.ripristinaTask = function (messaggio) {
        var _this = this;
        this.taskService.aggiornaTask(messaggio._id, this.tasks[messaggio.indice].stato)
            .subscribe(function (task) {
            if (task) {
                _this.tasks.splice(messaggio.indice, 1);
            }
        });
    };
    ListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lista',
            template: __webpack_require__("../../../../../src/app/lista/lista.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lista/lista.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]])
    ], ListaComponent);
    return ListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pagina-non-trovata works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaNonTrovataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginaNonTrovataComponent = /** @class */ (function () {
    function PaginaNonTrovataComponent() {
    }
    PaginaNonTrovataComponent.prototype.ngOnInit = function () {
    };
    PaginaNonTrovataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagina-non-trovata',
            template: __webpack_require__("../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginaNonTrovataComponent);
    return PaginaNonTrovataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var hostName = 'http://192.168.0.101';
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    // Implementare il controllo degli errori a tutti i metodi
    TaskService.prototype.getTaskDaFare = function () {
        return this.http.get(hostName + "/task");
    };
    TaskService.prototype.aggiungiNuovoTask = function (testo) {
        return this.http.post(hostName + "/task", { testo: testo }, httpOptions);
    };
    TaskService.prototype.getTaskCompletati = function () {
        return this.http.get(hostName + "/task/completati");
    };
    TaskService.prototype.rimuoviTaskCompletati = function () {
        return this.http.delete(hostName + "/task/completati");
    };
    TaskService.prototype.getTaskCancellati = function () {
        return this.http.get(hostName + "/task/cancellati");
    };
    TaskService.prototype.rimuoviTaskCancellati = function () {
        return this.http.delete(hostName + "/task/cancellati");
    };
    TaskService.prototype.aggiornaTask = function (_id, stato, testo) {
        if (stato === void 0) { stato = ''; }
        if (testo === void 0) { testo = ''; }
        if (testo !== '') {
            return this.http.put(hostName + "/task/" + _id, { testo: testo }, httpOptions);
        }
        else if (stato !== '') {
            return this.http.put(hostName + "/task/" + _id, { stato: stato }, httpOptions);
        }
        else {
            return null;
        }
    };
    TaskService.prototype.rimuoviTask = function (id) {
        return this.http.delete(hostName + "/task/" + id);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map