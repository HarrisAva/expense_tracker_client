import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password_confirmation: new FormControl(''),
  });

  errors: string[] = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // ngOnDestroy() {
  //   this.signupForm.reset();
  // }

  onSignup() {
    const formValue = this.signupForm.value;
    this.authService.signup(formValue).subscribe({
      next: (res: any) => {
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error.error);
        this.errors = error.error;
      },
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
