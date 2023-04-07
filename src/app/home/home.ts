import {Component, Injectable} from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

@Injectable( {providedIn: 'root'} )
export class Home {
    navNum = 0;

    navList: NavManage[] = [
        new NavManage('Toolkit', '#')
            .appendSide('首页', '#'),
        new NavManage('Document', '#')
            .appendSide('首页', '#')
            .appendSide('视频短信文档', '#')
    ];

    switchNav(num: number) {
        this.navNum = num;
    }

    showSideNav() {
        return this.navList[this.navNum].sn
    }
}
class NavManage {
    tm: TagManger;
    sn: TagManger[] = []

    constructor(tag: string, jumpUrl: string) {
        this.tm = new TagManger(tag, jumpUrl);
    }

    appendSide(tag: string, jumpUrl: string) {
        this.sn.push(new TagManger(tag, jumpUrl));
        return this;
    }
}

class TagManger {
    tag: string = ''
    jumpUrl: string = ''
    constructor(tag: string, jumpUrl: string) {
        this.tag = tag;
        this.jumpUrl = jumpUrl;
    }
}