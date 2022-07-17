import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    console.log(route);
    console.log(state);

    this.authService.provjeriAkoJeKorisnikPrijavljen(route.data["USER_TYPE"])
      .then(response => {
        console.log("Korisnik je prijavljen");

        return true;
      })
      .catch(error => {
        console.log("Korisnik nije prijavljen");

        this.router.navigate(['/prijava']);
        return false;
      })
      .finally(() => {

      });



    return true;
  }


  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    // console.log(childRoute);
    // console.log(state);

    this.authService.provjeriAkoJeKorisnikPrijavljen(childRoute.data["USER_TYPE"])
      .then(response => {
        console.log("Korisnik je prijavljen");

        this.authService.provjeriAkoJeAktivanKorisnikAdmin(childRoute.data["USER_TYPE"])
          .then(resp => {
            return true;
          })
          .catch(err => {
            console.log(err);
            return false;
          })
          .finally(() => {

          });

      })
      .catch(error => {
        console.log("Korisnik nije prijavljen");

        this.router.navigate(['/prijava']);
        return false;
      })
      .finally(() => {

      });

    return true;
  }


  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }


}
