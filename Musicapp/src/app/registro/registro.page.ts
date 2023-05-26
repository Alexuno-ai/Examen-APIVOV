import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string;
  correo: string;
  contrasena: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  registrar() {
    this.afAuth.createUserWithEmailAndPassword(this.correo, this.contrasena)
      .then(() => {
        // Registro exitoso 
        this.router.navigate(['/home']);
      })
      .catch(error => {
        // Manejo de errores, puedes mostrar una notificación o realizar otras acciones
        console.log('Error al registrar:', error);
      });
  }
}

