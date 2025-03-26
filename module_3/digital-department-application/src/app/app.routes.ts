import { Routes } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

export const routes: Routes = [
    {path:"", component: GreetingComponent},
    {path:"page1/:id", component: Page1Component},
    {path:"page2", component: Page2Component}
];
