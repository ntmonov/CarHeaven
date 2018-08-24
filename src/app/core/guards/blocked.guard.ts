import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlockedGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.isBlocked()
    }

  isBlocked() : boolean {
    if (this.authService.isBlocked()) {
      this.router.navigate(['/blocked'])
      return false
    }

    return true
  }
}
