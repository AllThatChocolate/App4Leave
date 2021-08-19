import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = "http://localhost:53067";
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      Id: user.Id,
      UserName: user.UserName,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      StaffNumber: user.StaffNumber,
      Title: user.Title,
      LeaveDaysAvailable: user.LeaveDaysAvailable,
      NextOfKinID: user.NextOfKinID,
      DesignationID: user.DesignationID,
      RoleID: user.RoleID,
    LoggedOn: user.LoggedOn,
    Password: user.Password
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

  userAuthentication(UserName: any, Password: any){
    var data = "UserName"+UserName+"&Password"+Password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded', 'No-Auth':'True'});
    return this.http.post(this.rootUrl+'/token', data, {headers: reqHeader});
  }

  getUserClaims() {
    return this.http.get(this.rootUrl + '/api/GetUserClaims');
  }

}
