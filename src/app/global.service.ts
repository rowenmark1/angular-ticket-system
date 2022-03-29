import { Injectable } from '@angular/core';
import { AppAuthService } from './app-auth.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = 'http://localhost:8000/api/my';

  constructor(private _httpClient:HttpClient,private _appAuthService:AppAuthService) { }
  getAll() : any {
    const token = this._appAuthService.getSession();
    return this._httpClient.get(this.url, {
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }
}
