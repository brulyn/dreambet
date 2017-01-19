"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./pages_components/home.component');
var about_component_1 = require('./pages_components/about.component');
var house_component_1 = require('./pages_components/house.component');
var car_component_1 = require('./pages_components/car.component');
var watch_component_1 = require('./pages_components/watch.component');
var holiday_component_1 = require('./pages_components/holiday.component');
var wedding_component_1 = require('./pages_components/wedding.component');
var report_component_1 = require('./pages_components/report.component');
var contact_component_1 = require('./pages_components/contact.component');
var createaccount_component_1 = require('./pages_components/createaccount.component');
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'dreamhouse',
        component: house_component_1.HouseComponent
    },
    {
        path: 'dreamcar',
        component: car_component_1.CarComponent
    },
    {
        path: 'dreamwatch',
        component: watch_component_1.WatchComponent
    },
    {
        path: 'dreamholiday',
        component: holiday_component_1.HolidayComponent
    },
    {
        path: 'dreamwedding',
        component: wedding_component_1.WeddingComponent
    },
    {
        path: 'report',
        component: report_component_1.ReportComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'createaccount',
        component: createaccount_component_1.CreateComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map