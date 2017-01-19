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
var angular2_jwt_1 = require('angular2-jwt');
var options = {
    theme: {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBWIdMCk6vstboqs4lEgohBaMHPcf4TcmW9n3QSgJSy4b3KtBPQ'
    },
    languageDictionary: {
        title: "Dream Bet"
    },
    additionalSignUpFields: [
        {
            name: "full_name",
            placeholder: "Enter your full name"
        }]
};
var TopComponent = (function () {
    function TopComponent() {
        this.lock = new Auth0Lock('rNL2YdNBMa3pTas6JX5q92GGDiGlL8J9', 'brulyn.auth0.com', options);
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }
    TopComponent.prototype.login = function () {
        var self = this;
        // Call the show method to display the widget.
        this.lock.show({ connections: ['facebook'] }, function (err, profile, id_token) {
            if (err) {
                throw new Error(err);
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);
            self.loggedIn();
        });
    };
    TopComponent.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.loggedIn();
    };
    TopComponent.prototype.loggedIn = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    TopComponent = __decorate([
        core_1.Component({
            selector: 'top-comp',
            templateUrl: './app/menu_component/top_menu.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TopComponent);
    return TopComponent;
}());
exports.TopComponent = TopComponent;
//# sourceMappingURL=top_menu.component.js.map