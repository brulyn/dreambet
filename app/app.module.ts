import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages_components/home.component';
import { FooterComponent } from './menu_component/footer.component';
import { TopComponent } from './menu_component/top_menu.component';
import { AboutComponent } from './pages_components/about.component';
import { HouseComponent } from './pages_components/house.component';
import { CarComponent } from './pages_components/car.component';
import { WatchComponent } from './pages_components/watch.component';
import { HolidayComponent } from './pages_components/holiday.component';
import { WeddingComponent } from './pages_components/wedding.component';
import { ReportComponent } from './pages_components/report.component';
import { ContactComponent } from './pages_components/contact.component';
import { CreateComponent } from './pages_components/createaccount.component';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,    
        TopComponent,
        AboutComponent,
        HouseComponent,
        CarComponent,
        WatchComponent,
        HolidayComponent,
        WeddingComponent,
        ReportComponent,
        ContactComponent,
        CreateComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }