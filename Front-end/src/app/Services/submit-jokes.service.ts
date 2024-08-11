import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Constants } from 'src/configs/constants';
import { SubmitJokes} from '../interfaces/jokes'

@Injectable({
  providedIn: 'root',
})
export class SubmitJokesService {
  constructor(
    private http: HttpClient,
    private constants: Constants,
    private ngxService: NgxUiLoaderService
  ) {}



  submitJoke(joke: SubmitJokes): Promise<any>{
    this.ngxService.start()
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${this.constants.SUBMIT_JOKES}/add`, joke).subscribe((response)=>{
        resolve(response);        
        this.ngxService.stop()
      }, (error)=> {
        reject(error)
        this.ngxService.stop()
      })
    })
  }
}
