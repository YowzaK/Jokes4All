import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UnmoderatedJoke } from 'src/app/interfaces/jokes';
import { ModerateJokesService } from 'src/app/Services/moderate-jokes.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-moderate-jokes',
  templateUrl: './moderate-jokes.component.html',
  styleUrls: ['./moderate-jokes.component.css'],
})
export class ModerateJokesComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private moderateService: ModerateJokesService,
    private router: Router
  ) {}

  unJoke: UnmoderatedJoke = {
    _id: '',
    type: 0,
    joke: '',
  };

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      joke: [null, [Validators.required]],
    });
    this.getJoke();
  }

  submitForm(): void {
    if (this.validateForm.valid) {
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    this.validateForm.reset();
  }

  getJoke() {
    this.moderateService.getAjoke().then((data) => {
      this.unJoke = data;
      console.log(this.unJoke);
    });
  }

  typeOfJoke() {
    if (this.unJoke.type == 1) {
      return 'Computing Jokes';
    } else if (this.unJoke.type == 2) {
      return 'Animal Jokes';
    } else if (this.unJoke.type == 3) {
      return 'Dad Jokes';
    }
    return '';
  }

  computing() {
    this.unJoke.type = 1;
  }
  animal() {
    this.unJoke.type = 2;
  }
  dadjokes() {
    this.unJoke.type = 3;
  }

  addToDeliverJokes() {
    this.moderateService.addToDeliver(this.unJoke).then(
      (data) => {
        alert(
          'successfully added to DeliverJokes and deleted from SubmitJokes'
        );
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['']);
      }
    );
  }

  deleteJoke() {
    this.moderateService.deleteFromSubmitJokes(this.unJoke._id).then((data) => {
      alert('Deleted from submitJokes');
      this.router.navigate(['']);
    },
    (error)=>{
      alert('server error')
      this.router.navigate(['']);
    });
  }
}
