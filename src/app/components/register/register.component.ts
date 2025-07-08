import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Utente } from '../../models/utente';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: Utente ={ nome: '', email:'', password:''}

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    
    this.auth.register(this.user).subscribe({
      next: () => this.router.navigate(['/login']),
      error: err => console.error(err)
    });
  }

}
