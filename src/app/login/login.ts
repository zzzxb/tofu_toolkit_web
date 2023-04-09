import {Component, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AppComponent} from "../component";
import {HttpReq} from "../comment/HttpReq";

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

@Injectable( {providedIn: 'root'} )
export class Login {
    username = "";
    usernameMaxLength = 10;
    usernameBorderColor = "white";

    password = "";
    passwordMaxLength = 10;
    passwordBorderColor = "white";

    inputUsername(event: KeyboardEvent) {
        this.username = (<HTMLInputElement>event.target).value;
    }

    inputPassword(event: KeyboardEvent) {
        this.password = (<HTMLInputElement>event.target).value;
    }

    constructor(private router: Router, private comp: AppComponent, private http: HttpReq) {}


    login() {
        if (this.username == "" || this.password == "") {
            alert("Please enter username and password");
            return;
        }

        let resp = this.http.post<String>("/token", null)
        resp.subscribe(s => console.log(s))

        this.router.navigate(['/home'])
            .then(r => console.log(r));
    }
}