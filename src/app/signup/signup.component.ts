import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private readonly router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      comfirmpassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phoneNr: new FormControl('', [Validators.required])
    })
  }

  signUp() {
    this.router.navigate(['login'])
  }

}
