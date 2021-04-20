import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-page-routing.module';

import { LandingPage } from './landing-page.page';
import { AngularMaterialModule } from '../material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LandingPage,
    SignInComponent,
    SignUpComponent]
})
export class LandingPageModule { }
