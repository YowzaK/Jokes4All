import { Constants } from './../configs/constants';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { DeliverjokesComponent } from './components/deliverjokes/deliverjokes.component';
import { SubmitJokesComponent } from './components/submit-jokes/submit-jokes.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthComponent } from './components/auth/auth.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ModerateJokesComponent } from './components/moderate-jokes/moderate-jokes.component';
import { NzCardModule } from 'ng-zorro-antd/card';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DeliverjokesComponent,
    SubmitJokesComponent,
    AuthComponent,
    ModerateJokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzSkeletonModule,
    NzButtonModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NzCardModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
