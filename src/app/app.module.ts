import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component';
import {HttpClientModule} from "@angular/common/http";

import {HttpReq} from "./comment/HttpReq";
import {Login} from "./login/login";
import {Home} from "./home/home";
import {Doc} from "./pages/doc/doc";
import {LLC} from "./pages/llc/llc";
import {VideoMsg} from "./pages/video/video-msg";
import {TextMsg} from "./pages/text/text-msg";
import {AudioMsg} from "./pages/audio/audio-msg";
import {Toolkit} from "./pages/toolkit/toolkit";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    declarations: [
        AppComponent,
        Login, Home,
        Doc, LLC, Toolkit, VideoMsg, TextMsg, AudioMsg,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // material 组件
        MatDividerModule,
        MatIconModule,
        MatTabsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        MatSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
