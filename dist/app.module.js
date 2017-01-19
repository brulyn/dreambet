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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var home_component_1 = require('./pages_components/home.component');
var footer_component_1 = require('./menu_component/footer.component');
var top_menu_component_1 = require('./menu_component/top_menu.component');
var about_component_1 = require('./pages_components/about.component');
var house_component_1 = require('./pages_components/house.component');
var car_component_1 = require('./pages_components/car.component');
var watch_component_1 = require('./pages_components/watch.component');
var holiday_component_1 = require('./pages_components/holiday.component');
var wedding_component_1 = require('./pages_components/wedding.component');
var report_component_1 = require('./pages_components/report.component');
var contact_component_1 = require('./pages_components/contact.component');
var createaccount_component_1 = require('./pages_components/createaccount.component');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                footer_component_1.FooterComponent,
                top_menu_component_1.TopComponent,
                about_component_1.AboutComponent,
                house_component_1.HouseComponent,
                car_component_1.CarComponent,
                watch_component_1.WatchComponent,
                holiday_component_1.HolidayComponent,
                wedding_component_1.WeddingComponent,
                report_component_1.ReportComponent,
                contact_component_1.ContactComponent,
                createaccount_component_1.CreateComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map