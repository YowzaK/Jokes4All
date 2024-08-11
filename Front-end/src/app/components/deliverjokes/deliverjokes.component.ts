import { AuthServiceService } from './../../Services/auth-service.service';
import { Type, Joke, SubmitJokes } from './../../interfaces/jokes';
import { Component, OnInit } from '@angular/core';
import { DeliverJokesService } from 'src/app/Services/deliver-jokes.service';

@Component({
  selector: 'app-deliverjokes',
  templateUrl: './deliverjokes.component.html',
  styleUrls: ['./deliverjokes.component.css'],
})
export class DeliverjokesComponent implements OnInit {
  ngOnInit(): void {
    this.getOneJoke();
    this.getTypes();
  }



  constructor(private deliverService: DeliverJokesService) {}

  selectedType: string = 'Select a type';
  types: Type[] = [];
  joke: Joke = {
    id: '',
    type: 0,
    types: '',
    joke: '',
  };

  getTypes() {
    this.deliverService.getTypes().then(
      (data: any) => {
        this.types = data;
      },
      (error) => {
        alert('cannot connect to deliver service');
      }
    );
  }

  getSelectedtype(type: string) {
    this.selectedType = type;
  }

  getJokeFromType() {
    if (this.selectedType === "Select a type"){
      alert("select a type");
    }else{
      this.deliverService.getFromType(this.selectedType).then(
        (data: any) => {
          this.joke = data;
        },
        (error) => {
          alert('cannot connect to deliver service');
        }
      );
    }
    
  }

  getOneJoke() {
    this.deliverService.getJoke().then(
      (data: any) => {
        this.joke = data;
      },
      (error) => {
        alert('cannot connect to deliver service');
      }
    );
  }
}
