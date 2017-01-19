import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
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

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'dreamhouse',
        component: HouseComponent
    },
    {
        path: 'dreamcar',
        component: CarComponent
    },
    {
        path: 'dreamwatch',
        component: WatchComponent
    },
    {
        path: 'dreamholiday',
        component: HolidayComponent
    },
    {
        path: 'dreamwedding',
        component: WeddingComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'createaccount',
        component: CreateComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);