import { Injectable } from '@angular/core';
import { AppAuthService } from './app-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  ticketUrl = 'http://127.0.0.1:8000/api/tickets/';



  constructor(private _httpClient:HttpClient, private _appAuthService:AppAuthService) { }

  getAll() : any {
    const token = this._appAuthService.getSession();
    return this._httpClient.get(this.ticketUrl, {
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }
  getById(id : string) : any{
    const token = this._appAuthService.getSession();
    return this._httpClient.get(this.ticketUrl + id ,{
      headers: new HttpHeaders().set("Authorization" , "Bearer " + token)
    });
  }
}
