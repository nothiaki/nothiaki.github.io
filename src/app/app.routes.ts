import { Routes } from '@angular/router';
import { RootComponent } from './pages/root/root.component';

export const routes: Routes = [
    { path: '', component: RootComponent},
    
    { path: '**', component: RootComponent }
];
