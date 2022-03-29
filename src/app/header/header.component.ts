import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from './../app-auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private _appAuthService: AppAuthService, private spinner: NgxSpinnerService, private _router:Router) {
    if(localStorage.getItem('islog') == 'true'){
      localStorage.setItem('islog', 'true');
      this.isLogin = true;
    }else{
      localStorage.setItem('islog', 'false');
    }
  }
  isLogged = false;
  isLogin = false;

  onLogout() {
    this.spinner.show();
    setTimeout(() => {
    this._router.navigate(['/login']);
    this.isLogin = false;
    this._appAuthService.logout();
    this.spinner.hide();
  }, 1000);
  }

  ngOnInit(): void {
    this._appAuthService.isLogged.subscribe((auth) => {
      this.spinner.show();
      setTimeout(() => {
      this.isLogged = auth;
      this.isLogin = true;
      this.spinner.hide();
    }, 1600);
    });
  }
}
