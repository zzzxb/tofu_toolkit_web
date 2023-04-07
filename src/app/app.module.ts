import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component';

import {Login} from "./login/login";
import {Home} from "./home/home";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        AppComponent,
        Login, Home,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        // material 组件
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
