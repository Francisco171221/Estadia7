import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  passwordVisible: boolean = false;

  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  irAHome() {
    this.router.navigate(['/home']); // Redirige a /home
  }

  togglePasswordVisible() {
    this.passwordVisible = true; // Mostrar contraseña
    this.cdRef.detectChanges(); // Forzar actualización en Angular

    setTimeout(() => {
      this.passwordVisible = false; // Ocultar contraseña después de 2 segundos
      this.cdRef.detectChanges(); // Asegurar que el cambio se refleje
    }, 2000);
  }
}
