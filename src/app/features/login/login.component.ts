import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // loginForm: FormGroup = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // })

  loginForm: FormGroup;

  isError:boolean = false;

  constructor(private authService:AuthenticationService, private router:Router, private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.authService.login(username, password).subscribe({
        next: (res:any) => {
          this.router.navigate(['/'])
        },
        error: (error: any) => {
          console.log("Login error", error)
          this.isError = true;
        }
      })
    }
  }

  onCreateAccount(){
    this.router.navigate(['/signup'])
  }




}
