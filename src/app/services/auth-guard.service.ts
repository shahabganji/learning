import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  // tslint:disable-next-line:no-shadowed-variable
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.userService.isGuest()) {
      return true;
    }

    this.router.navigate(['/login'], {
      queryParams: {
        return: state.url
      }
    });
    return false;
  }

}
