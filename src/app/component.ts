import {Component, Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})


@Injectable( {providedIn: 'root'} )
export class AppComponent {
  auth: boolean = false;
}
