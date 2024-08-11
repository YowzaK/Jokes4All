import { UnmoderatedJoke } from './../interfaces/jokes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Constants } from 'src/configs/constants';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class ModerateJokesService {
  constructor(
    private http: HttpClient,
    private constants: Constants,
    private ngxService: NgxUiLoaderService,
    private authService: AuthServiceService
  ) {}

  getAjoke(): Promise<any> {
    this.ngxService.start();
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.constants.SUBMIT_JOKES}/getOneJoke`).subscribe(
        (response: any) => {
          resolve(response.data[0]);
          this.ngxService.stop();
        },
        (error) => {
          reject(error);
          this.ngxService.stop();
        }
      );
    });
  }

  addToDeliver(joke: UnmoderatedJoke): Promise<any> {
    this.ngxService.start();
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders({
        Authorization: `bearer ${this.authService.bearerToken}`,
      });
      this.http
        .post(`${this.constants.MODERATE_JOKES}/addNewJoke`, joke, { headers })
        .subscribe(
          (response) => {
            resolve(response);
            this.ngxService.stop();
          },
          (error) => {
            reject(error);
            this.ngxService.stop();
          }
        );
    });
  }

  deleteFromSubmitJokes(jokeid: string): Promise<any> {
    this.ngxService.start();
    return new Promise<any>((resolve, reject) => {
      const headers = new HttpHeaders({
        Authorization: `bearer ${this.authService.bearerToken}`,
      });
      this.http
        .delete(`${this.constants.MODERATE_JOKES}/delete/${jokeid}`, {
          headers,
        })
        .subscribe(
          (response: any) => {
            resolve(response);
            this.ngxService.stop();
          },
          (error) => {
            reject(error);
            this.ngxService.stop();
          }
        );
    });
  }
}
