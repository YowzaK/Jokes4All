import { Router } from '@angular/router';
import { AuthServiceService } from './../../Services/auth-service.service';
import { LoginForm } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit  {
  validateForm!: UntypedFormGroup;
 
  constructor(private fb: UntypedFormBuilder, private authService: AuthServiceService, private router: Router) {}
  user: LoginForm ={
    username: '',
    password: ''
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.user.username = this.validateForm.value.username;
      this.user.password = this.validateForm.value.password; 
      this.authService.login(this.user).then(()=> {       
        this.router.navigate([""]);
      }, (error) => {
        alert('Invalid Credentials please try again');
      })   
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}
