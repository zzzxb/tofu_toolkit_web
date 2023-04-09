import {Component, Injectable} from '@angular/core';

@Component({
    selector: 'app-toolkit',
    templateUrl: './toolkit.html',
    styleUrls: ['./toolkit.css']
})

@Injectable( {providedIn: 'root'} )
export class Toolkit {
    showDiv = 'none';

    show() {
        this.showDiv = this.showDiv == 'none'? 'block' : 'none';
    }
}