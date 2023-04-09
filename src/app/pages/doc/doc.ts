import {Component, Injectable} from '@angular/core';
import {Nav} from "../../comment/Nav";
import {Download} from "../../comment/Download";

@Component({
    selector: 'app-toolkit',
    templateUrl: './doc.html',
    styleUrls: ['./doc.css']
})

@Injectable( {providedIn: 'root'} )
export class Doc {
    download = new Download();
    navArray: Nav[] = [
        new Nav("视频短信文档", '', "/home"),
        new Nav("文本短信文档", '', "/home"),
        new Nav("语音短信文档", '', "/home"),
    ];
}