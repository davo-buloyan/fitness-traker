import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate = new Date()

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)] ),
    date: new FormControl('', [Validators.required]),
    agree: new FormControl('false', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value);

  }

  getMaxDate() {
    this.maxDate.setDate(this.maxDate.getFullYear() - 18)
  }

}
