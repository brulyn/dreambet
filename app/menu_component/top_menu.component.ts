import { Component } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

declare var Auth0Lock: any;
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
@Component({

    selector: 'top-comp',
    templateUrl: './app/menu_component/top_menu.component.html'
})


export class TopComponent {


    lock = new Auth0Lock('rNL2YdNBMa3pTas6JX5q92GGDiGlL8J9', 'brulyn.auth0.com', options);
    jwtHelper: JwtHelper = new JwtHelper();

    constructor() {
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }

    login() {
        var self = this;
        // Call the show method to display the widget.
        this.lock.show({ connections: ['facebook'] }, (err: string, profile: string, id_token: string) => {
            if (err) {
                throw new Error(err);
            }

            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);

            self.loggedIn();
        });
    }

    logout() {
        // Remove token from localStorage
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.loggedIn();
    }

    loggedIn() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

}