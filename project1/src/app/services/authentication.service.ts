import { Injectable } from '@angular/core';
import { SignInData } from '../model/signInData';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: SignInData = new SignInData('user', 'test');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.isAdmin(signInData))
    {
      this.isAuthenticated = true;
      this.router.navigate(['administrator']);
      return true;
    }
    else if (this.isManager(signInData))
    {
      this.isAuthenticated = true;
      this.router.navigate(['dashboard']);
      return true;
    }
    else if (this.checkCredentials(signInData)) 
    {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    else 
    {
      this.isAuthenticated = false;
      return false;
    }
    
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  private isAdmin(signInData: SignInData): boolean{
    if((signInData.getLogin() === "admin") && (signInData.getPassword() === "password")) {return true;}
    else return false;
  }

  private isManager(signInData: SignInData): boolean{
    if((signInData.getLogin() === "manager") && (signInData.getPassword() === "manager")) {return true;}
    else return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
