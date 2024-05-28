import { Injectable } from '@angular/core';
const ROLE = "__rol__";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  public setRole(role:string):void{
    window.localStorage.setItem(ROLE,role );
  }
  public getRole():string{
    return window.localStorage.getItem(ROLE) || "";
  }
  public removeRole():void{
    window.localStorage.removeItem(ROLE);
  }
}
