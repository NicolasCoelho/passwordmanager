import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Database } from "../_database/db";

@Injectable()
export class CanActivateAuthenticate implements CanActivate {
  constructor(private db: Database, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if (this.db.isFirstTime()) {
      this.router.navigate(['/intro'])
      return false
    } else {
      return true
    }
  }

}
