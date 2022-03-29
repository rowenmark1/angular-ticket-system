import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AppAuthService } from '../app-auth.service';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup ;
  email = '';
  password = '';


  constructor(private spinner: NgxSpinnerService,private _appAuthService:AppAuthService,private _globalService:GlobalService, private _router:Router) {

    this.loginForm = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.loginForm.valid){
      this.spinner.show();
     console.log(this.loginForm.value);
     this._appAuthService.login(this.loginForm.value).subscribe(
       (token:any) => {
         console.log('',token);
         console.log(token);
         this._appAuthService.setSession(token);
         localStorage.setItem('islog','true')
         this._router.navigate(['/'])
         setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 4000);
       }
     )
    }
  }

}

