import { Routes } from '@angular/router';
import { RootComponent } from './pages/root/root.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: RootComponent},
    
    { path: '**', component: NotFoundComponent}
];
