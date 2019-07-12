import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
export declare class ErrorInterceptor implements HttpInterceptor {
    private authenticationService;
    private router;
    constructor(authenticationService: AuthenticationService, router: Router);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
