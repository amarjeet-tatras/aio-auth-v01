import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
export declare class AuthGuard implements CanActivate {
    private router;
    constructor(router: Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}
