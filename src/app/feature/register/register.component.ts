import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  onRegister(): void {
    const { email, password } = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email, password).then(user => {
      window.alert('Register Successfully!.')
      this.router.navigate(['../'])
    });
  }
}
