import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/component';
import {Home} from "./pages/home/home";
import {Login} from "./pages/login/login";
import {Foot} from "./frame/foot/foot";
import {Head} from "./frame/head/head";

@NgModule({
  declarations: [
    AppComponent,
    Head, Foot,
    Login, Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
