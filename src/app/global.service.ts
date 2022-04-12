import { Injectable } from '@angular/core';
import { AppAuthService } from './app-auth.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = 'http://localhost:8000/api/my';
  urlupdate = 'http://127.0.0.1:8000/api/my';

  constructor(private _httpClient:HttpClient,private _appAuthService:AppAuthService) { }
  getAll() : any {
    const token = this._appAuthService.getSession();
    return this._httpClient.get(this.url, {
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }
  updateUser(profile: any): any {
    const data = {name:profile.name, email:profile.email , role:profile.role , created_at:profile.created_at , updated_at:profile.updated_at , password:profile.password};
    const token = this._appAuthService.getSession();
    return this._httpClient.put(this.urlupdate + profile.id, data, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }
}
