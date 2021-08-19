import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer" + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq).pipe(
                tap(
                    (succ: any) => { },
                    (err: any) => {
                        if (err.status === 401)
                            this.router.navigateByUrl('/login');
                    }
                )
            );

        }
        else {
            return next.handle(req.clone());
            //he line above isnt supposed to be there but if it's removed, I get an error
            this.router.navigateByUrl('/login');
        }

    }
}