import {Component, Injectable} from '@angular/core';
import {Nav} from "../comment/Nav";

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

@Injectable( {providedIn: 'root'} )
export class Home {
    officialWebsite = 'https://www.umyun.com';

    updateTitle(nav: Nav) {
        this.nowNav = nav;
    }
    navArray: Nav[] = [
        new Nav("主页", 'Home', "/home"),
        new Nav("视频短信", 'VideoMsg', "/home/video"),
        new Nav("文本短信", 'TextMsg', "/home/text"),
        new Nav("语音短信", 'AudioMsg', "/home/audio"),
        new Nav("文档", 'Document',"/home/doc"),
        new Nav("LLC", 'LLC', "/home/llc"),
        new Nav("工具", 'Toolkit', "/home/toolkit"),
    ];
    nowNav = this.navArray[0];
    bodyContentStyle = "height: " + (window.innerHeight) + "px";

    openUrl(url: string) {
        window.open(url);
    }
}