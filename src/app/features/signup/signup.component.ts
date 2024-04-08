import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password_confirmation: new FormControl('')
  })
  // signupForm: FormGroup;

  errors:string[] = []

  constructor(private authService:AuthenticationService, private router:Router, route: ActivatedRoute, private formBuilder: FormBuilder){

    // this.signupForm = this.formBuilder.group ({
    //   first_name: ['', Validators.required],
    //   last_name: ['', Validators.required],
    //   //  email: ['', Validators.required, Validators.email],
    //   email: ['', Validators.required],
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    //   password_confirmation: ['', Validators.required],

    // });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.signupForm.reset();
  }

  onSignup(){
    const formValue = this.signupForm.value
    this.authService.signup(formValue).subscribe({
      next: (res:any) => {
        this.router.navigate(['/login'])
      },
      error: (error:any) => {
        console.log(error.error)
        this.errors = error.error
      }
    })
  }

  onCancel(){
    this.router.navigate(['/']);
  }
}
