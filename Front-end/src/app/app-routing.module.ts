import { AuthGuard } from './auth.guard';
import { ModerateJokesComponent } from './components/moderate-jokes/moderate-jokes.component';
import { SubmitJokesComponent } from './components/submit-jokes/submit-jokes.component';
import { DeliverjokesComponent } from './components/deliverjokes/deliverjokes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {path: '', component: DeliverjokesComponent},
  {path: 'submitJokes', component: SubmitJokesComponent},
  {path: 'login', component: AuthComponent},
  {path: 'moderator', component: ModerateJokesComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
