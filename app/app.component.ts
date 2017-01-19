import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <top-comp></top-comp>
    <router-outlet></router-outlet>
    <footer-comp></footer-comp>
    `,
    styles: [`
        .jumbotron {
            box-shadow: 0 2px 0 rgba(0,0,0,0.2);
        }
    `]
})

export class AppComponent {}
