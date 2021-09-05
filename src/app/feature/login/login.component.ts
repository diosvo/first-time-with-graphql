import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AngularFireAuth,
  ) { }

  onLogin(): void {
    const { email, password } = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, password).then(user => {
      this.router.navigate(['../'])
    });
  }
}
