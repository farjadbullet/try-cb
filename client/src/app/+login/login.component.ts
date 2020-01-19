import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  authService:AuthService;
  isNew:boolean;
  loginError:string;
  username:string;
  password:string;
  router:Router;

  constructor(authService:AuthService,router:Router) {
    this.authService=authService;
    this.isNew=true;
    this.router=router
  }

  login(email:string,password:string,isNew:boolean){
    if(isNew){
      this.authService.register(email,password).then((result) => {
        this.router.navigateByUrl("/home");
      }, (error) => {
        this.loginError=error;
        this.password=null;
      });
    }else{
      this.authService.login(email, password).then((result) => {
                this.router.navigateByUrl("/home");
            }, (error) => {
                this.loginError=error;
                this.username=null;
                this.password=null;
            });
        }
    }

  ngOnInit() {
  }

}
