import {Component, Injectable} from '@angular/core';
import {Router} from '@angular/router';

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

    constructor(private router: Router) {}

    login() {
        if (this.username == "" || this.password == "") {
            alert("Please enter username and password");
            return;
        }
        if (this.username == "admin" && this.password == "admin") {
            this.router.navigate(['/home'])
                .then(r => console.log(r));
        }
    }
}