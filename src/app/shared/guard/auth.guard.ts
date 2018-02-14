import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.super_function()) {
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }

    super_function() : boolean {

        let isLoggedin = localStorage.getItem('isLoggedin');

        if (isLoggedin != undefined && isLoggedin == "true") {
            // logged in so return true

            //TODO send an API request to confirm token

            return true;
        }

        return false;
    }
}