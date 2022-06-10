import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  maxDate = new Date();

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    date: new FormControl('', [Validators.required]),
    agree: new FormControl('false', [Validators.required]),
  });

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {}

  onSubmit() {
    this.authService.registerUser({
      email: this.profileForm.value.email,
      password: this.profileForm.value.password
    })
  }

  getMaxDate() {
    this.maxDate.setDate(this.maxDate.getFullYear() - 18);
  }
}
