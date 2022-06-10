import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TraningComponent } from './traning/traning.component';
import { CurrentTrainingComponent } from './traning/current-training/current-training.component';
import { NewTraningComponent } from './traning/new-traning/new-traning.component';
import { PastTraningsComponent } from './traning/past-tranings/past-tranings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrianingComponent } from './traning/current-training/stop.training.component';
import { AuthService } from './auth/auth.service';
import { TraningService } from './traning/training.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TraningComponent,
    CurrentTrainingComponent,
    NewTraningComponent,
    PastTraningsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrianingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, TraningService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrianingComponent]
})
export class AppModule { }
