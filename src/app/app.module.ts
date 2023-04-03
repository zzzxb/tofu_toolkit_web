import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component';

import {Foot} from "./frame/foot/foot";
import {Head} from "./frame/head/head";

import {Login} from "./login/login";
import {Home} from "./home/home";
import {Toolkit} from "./toolkit/toolkit";

@NgModule({
    declarations: [
        AppComponent,
        Head, Foot,
        Login, Home, Toolkit
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
