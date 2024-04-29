import { Component, OnInit } from '@angular/core';
import { ILogIn } from '../../Interfaces/LogIn.dto.interface';
import { LogInService } from '../../Services/LogInService/log-in.service';
import { Router } from '@angular/router';
import { TokenService } from '../../Services/Token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  constructor(private logInService: LogInService, private router: Router, private TokenService: TokenService) { }
  isCLicked: boolean = false;
  ngOnInit(): void {
    if (this.TokenService.hasToken()) {
      this.router.navigate(["/main"]);
    }
  }
  Login() {
    this.isCLicked = true;
    this.logInService.LogIn(this.LoginModel).subscribe(res => {
      if (res?.body?.token) {
        console.log(res?.body?.token);
        this.TokenService.addToken(res.body.token);
        this.router.navigate(["/main"]);
      }
    }, err => {
      console.log(err);
      if (err && err.statusCode !== 200) {
        this.LoginErrors = err.errors.message;
        console.log(this.LoginErrors)
        this.LoginModel.password = "";
        this.isCLicked = false;
      }
    });
  }

  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  LoginErrors!: string;

  LoginModel: ILogIn = {
    email: "",
    password: "",
  };

}
