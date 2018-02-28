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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_cose_da_fare_lista_cose_da_fare_component__ = __webpack_require__("../../../../../src/app/lista-cose-da-fare/lista-cose-da-fare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_lista_component__ = __webpack_require__("../../../../../src/app/lista/lista.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagina_non_trovata_pagina_non_trovata_component__ = __webpack_require__("../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'pagina-non-trovata', component: __WEBPACK_IMPORTED_MODULE_5__pagina_non_trovata_pagina_non_trovata_component__["a" /* PaginaNonTrovataComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    {
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__lista_cose_da_fare_lista_cose_da_fare_component__["a" /* ListaCoseDaFareComponent */] },
            { path: ':tipoLista', component: __WEBPACK_IMPORTED_MODULE_4__lista_lista_component__["a" /* ListaComponent */] }
        ]
    },
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
exports.push([module.i, "#esterno {\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  padding: 0px;\n}\n\nnav {\n  width: 100%;\n}\n\nfooter {\n  margin-top: 20px;\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n}\n\n#copyright {\n  text-align: center;\n  margin: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"esterno\" class=\"container\">\n\n\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">To-Do App</a>\n    <button class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{ exact: true }\"\n            routerLink=\"/\">Da fare</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n            routerLinkActive=\"active\"\n            routerLink=\"/completate\">Completate</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n            routerLinkActive=\"active\"\n            routerLink=\"/eliminate\">Eliminate</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n  <footer>\n    <p id=\"copyright\">To Do di Lorenzo Imperatrice per il blog <a href=\"https://www.lorenzoimperatrice.it\">www.lorenzoimperatrice.it</a></p>\n  </footer>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pagina_non_trovata_pagina_non_trovata_component__ = __webpack_require__("../../../../../src/app/pagina-non-trovata/pagina-non-trovata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__registrazione_form_registrazione_form_component__ = __webpack_require__("../../../../../src/app/registrazione-form/registrazione-form.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_14__pagina_non_trovata_pagina_non_trovata_component__["a" /* PaginaNonTrovataComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__registrazione_form_registrazione_form_component__["a" /* RegistrazioneFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_13__auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* AuthService */]
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

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.checkLogin()) {
            return true;
        }
    };
    AuthGuardService.prototype.checkLogin = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem('to-do-token', token);
        this.token = token;
    };
    AuthService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('to-do-token');
        }
        return this.token;
    };
    AuthService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('to-do-token');
    };
    AuthService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        base = this.http.post("http://localhost:3000/user/" + type, user);
        var request = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthService.prototype.registrazione = function (user) {
        return this.request('post', 'registrazione', user);
    };
    AuthService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
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

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form>\n  <div class=\"form-group\">\n    <label for=\"email-login\">Email:</label>\n    <input #emailLogin type=\"email\" class=\"form-control\" id=\"email-login\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password-login\">Password:</label>\n    <input #passwordLogin type=\"password\" class=\"form-control\" id=\"password-login\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login(emailLogin.value, passwordLogin.value)\">Accedi</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.login = function (email, password) {
        var _this = this;
        var payload = {
            email: email,
            password: password
        };
        this.authService.login(payload)
            .subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-top: 5%;\n}\nlabel {\n  font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-login-form></app-login-form>\n    </div>\n    <div class=\"col-md-6\">\n      <app-registrazione-form></app-registrazione-form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = "<h1>L'indirizzo richiesto non appartiene a nesuna pagina conosciuta</h1>"

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
    PaginaNonTrovataComponent.prototype.ngOnInit = function () { };
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

/***/ "../../../../../src/app/registrazione-form/registrazione-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registrazione-form/registrazione-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Registrazione</h2>\n<form>\n  <div class=\"form-group\">\n    <label for=\"nome-reg\">Username:</label>\n    <input #nomeReg type=\"text\" class=\"form-control\" id=\"nome-reg\" aria-describedby=\"emailHelp\" placeholder=\"Inserire username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email-reg\">Email:</label>\n    <input #emailReg type=\"email\" class=\"form-control\" id=\"email-reg\" aria-describedby=\"emailHelp\" placeholder=\"Inserire email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password-reg\">Password:</label>\n    <input #passwordReg type=\"password\" class=\"form-control\" id=\"password-reg\" placeholder=\"Inserire password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"conferma-password-reg\">Conferma Password:</label>\n    <input #confermaPasswordReg type=\"password\" class=\"form-control\" id=\"conferma-password-reg\" placeholder=\"Conferma password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"registrati(nomeReg.value, emailReg.value, passwordReg.value, confermaPasswordReg.value)\">Registrati</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/registrazione-form/registrazione-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrazioneFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrazioneFormComponent = /** @class */ (function () {
    function RegistrazioneFormComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegistrazioneFormComponent.prototype.ngOnInit = function () { };
    RegistrazioneFormComponent.prototype.registrati = function (name, email, password, confermaPassword) {
        var _this = this;
        if (name !== '' && email !== '' && password !== '' && confermaPassword !== '' && password === confermaPassword) {
            var token = {
                email: email,
                password: password,
                name: name
            };
            this.auth.registrazione(token)
                .subscribe(function (tokenResponse) {
                if (tokenResponse) {
                    _this.router.navigate(['/']);
                }
            });
        }
    };
    RegistrazioneFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registrazione-form',
            template: __webpack_require__("../../../../../src/app/registrazione-form/registrazione-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registrazione-form/registrazione-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegistrazioneFormComponent);
    return RegistrazioneFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var hostName = 'http://localhost:3000';
var TaskService = /** @class */ (function () {
    function TaskService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.header = {
            headers: { Authorization: "Bearer " + this.auth.getToken() }
        };
    }
    // Implementare il controllo degli errori a tutti i metodi
    TaskService.prototype.getTaskDaFare = function () {
        return this.http.get(hostName + "/task", this.header);
    };
    TaskService.prototype.aggiungiNuovoTask = function (testo) {
        return this.http.post(hostName + "/task", { testo: testo }, this.header);
    };
    TaskService.prototype.getTaskCompletati = function () {
        return this.http.get(hostName + "/task/completati", this.header);
    };
    TaskService.prototype.rimuoviTaskCompletati = function () {
        return this.http.delete(hostName + "/task/completati", this.header);
    };
    TaskService.prototype.getTaskCancellati = function () {
        return this.http.get(hostName + "/task/cancellati", this.header);
    };
    TaskService.prototype.rimuoviTaskCancellati = function () {
        return this.http.delete(hostName + "/task/cancellati", this.header);
    };
    TaskService.prototype.aggiornaTask = function (_id, stato, testo) {
        if (stato === void 0) { stato = ''; }
        if (testo === void 0) { testo = ''; }
        if (testo !== '') {
            return this.http.put(hostName + "/task/" + _id, { testo: testo }, this.header);
        }
        else if (stato !== '') {
            return this.http.put(hostName + "/task/" + _id, { stato: stato }, this.header);
        }
        else {
            return null;
        }
    };
    TaskService.prototype.rimuoviTask = function (id) {
        return this.http.delete(hostName + "/task/" + id, this.header);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
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