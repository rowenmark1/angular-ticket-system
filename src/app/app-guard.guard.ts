import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppAuthService } from './app-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppGuardGuard implements CanActivate {
  login = this._appAuthService.isLogin;
  constructor(private _appAuthService: AppAuthService) {}
  //canActivate
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this._appAuthService.getSession();

    if (!token) {
    this.login = false;
    console.log(this.login);
    return false;
    }
    this.login = true;
    console.log(this.login);
    return true;
  }
}
