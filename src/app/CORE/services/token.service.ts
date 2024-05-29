import { Injectable } from '@angular/core';
const ACCESS_TOKEN = "accessToken";
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(tk:string):void{
    window.localStorage.setItem(ACCESS_TOKEN, tk);
  }
  public getToken(): string{
    return  window.localStorage.getItem(ACCESS_TOKEN) || "";
  }
  public rmToken():void{
    window.localStorage.removeItem(ACCESS_TOKEN);
  }


}
