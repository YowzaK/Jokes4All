import { SubmitJokesService } from './../../Services/submit-jokes.service';
import { SubmitJokes} from './../../interfaces/jokes';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-submit-jokes',
  templateUrl: './submit-jokes.component.html',
  styleUrls: ['./submit-jokes.component.css']
})
export class SubmitJokesComponent implements OnInit{
  validateForm!: UntypedFormGroup;
 ngOnInit(): void {
  this.validateForm = this.fb.group({
    joke: [null, [Validators.required]],
  });
 }
 constructor(private fb: UntypedFormBuilder, private submitService: SubmitJokesService, private router: Router){}

 submitJoke: SubmitJokes ={
  type: 0,
  joke: ''
 }

 selectedType :string = "Select a Type"

 computing(){
  this.submitJoke.type =1;
  this.selectedType = "Computing Jokes"
 }
 animal(){
  this.submitJoke.type =2;
  this.selectedType = "Animal Jokes"
 }
 dadjokes(){
  this.submitJoke.type =3;
  this.selectedType = "Dad Jokes"
 }

  submitForm(): void {
    if (this.validateForm.valid && this.submitJoke.type>0) {
      this.submitJoke.joke = this.validateForm.value.joke;      
      this.submitService.submitJoke(this.submitJoke).then(()=>{
        alert('Data succesfully submitted');
      }, (error)=>{
        alert('Error from the server');
      })
           
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });          
        }
      });
    }
    this.validateForm.reset(); 
  }

  
}
