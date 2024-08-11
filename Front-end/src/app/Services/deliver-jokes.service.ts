import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Constants } from 'src/configs/constants';

@Injectable({
  providedIn: 'root',
})
export class DeliverJokesService {
  constructor(
    private http: HttpClient,
    private constants: Constants,
    private ngxService: NgxUiLoaderService
  ) {}

  getJoke(): Promise<any> {
    this.ngxService.start();
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.constants.DELIVER_JOKES}/getOne`).subscribe(
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

  getTypes(): Promise<any> {
    this.ngxService.start();
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.constants.DELIVER_JOKES}/getTypes`).subscribe(
        (response: any) => {
          resolve(response.data);
          this.ngxService.stop();          
        },
        (error) => {
          reject(error);
          this.ngxService.stop();
        }
      );
    });
  }

  getFromType(type: string): Promise<any> {
    this.ngxService.start();
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.constants.DELIVER_JOKES}/oneFromTypes/${type}`).subscribe((response:any)=>{
        resolve(response.data[0]);      
        this.ngxService.stop();  
      },(error)=>{
        reject(error);
        this.ngxService.stop();
      })
    })
  }
}
