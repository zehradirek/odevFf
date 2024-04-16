import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  /**
   *
   */
  constructor(private fb:FormBuilder,
        private authService:AuthService,private router: Router) {
    
  }
ngOnInit(): void {
 this.loginForm = this.fb.group({
  'username' : ['', Validators.required],
  'password' :['', Validators.required]
 });
}
loginForm!: FormGroup;

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

       // Call the authentication service's login method
       console.log(username, password);
       
       if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login
        this.router.navigate(['/dashboard']);
      } else {
        alert ('Şifre Yanlış')
        // Handle authentication error (show error message, etc.)
      }
    
  }
  else{
    alert ('Form Valid Değil')
  }

}

}
