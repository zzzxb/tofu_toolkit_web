import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import {Toolkit} from "./pages/toolkit/toolkit";
import {Doc} from "./pages/doc/doc";

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'home', component: Home, children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'toolkit', component: Toolkit},
            { path: 'doc', component: Doc},
        ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
