import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage {
  correo: string;
  contrasena: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  iniciarSesion() {
    this.afAuth.signInWithEmailAndPassword(this.correo, this.contrasena)
      .then(() => {
        // Inicio de sesión exitoso, redirigir al lobby
        this.router.navigate(['/lobby']);
      })
      .catch(error => {
        // Manejo de errores, puedes mostrar una notificación o realizar otras acciones
        console.log('Error al iniciar sesión:', error);
      });
  }
}

