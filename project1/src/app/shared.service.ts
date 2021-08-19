import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44358/api";

  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val)
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val)
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val)
  }


  getTicketList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Ticket');
  }

  addTicket(val:any){
    return this.http.post(this.APIUrl+'/Ticket',val)
  }

  updateTicket(val:any){
    return this.http.put(this.APIUrl+'/Ticket',val)
  }

  deleteTicket(val:any){
    return this.http.delete(this.APIUrl+'/Ticket/'+val)
  }

  getAllTickets():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Ticket/GetAllTickets');
  }

  getAllEmployees():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Ticket/GetAllEmployees');
  }

}
