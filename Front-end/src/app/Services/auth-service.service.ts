import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Constants } from 'src/configs/constants';
import { LoginForm } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private constants: Constants,
    private ngxService: NgxUiLoaderService
  ) {}

  isAuthenticated: boolean = false;
  bearerToken: string = '';

  login(user: LoginForm): Promise<any> {
    this.ngxService.start();
    return new Promise<any>((resolve, reject) => {
      this.http
        .post(`${this.constants.MODERATE_JOKES}/login`, user)
        .subscribe((response: any) => {
          this.bearerToken = response.accessToken;
          this.isAuthenticated = true;
          resolve(response);
          this.ngxService.stop();
        }, (error) => {
          reject(error);
          this.isAuthenticated = false;
          this.ngxService.stop();
        });
    });
  }

  logout(){
    this.isAuthenticated = false;
  }

}
