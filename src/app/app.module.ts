import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component';

import {Login} from "./login/login";
import {Home} from "./home/home";

@NgModule({
    declarations: [
        AppComponent,
        Login, Home,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
