import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage {
  pages = [
    { title: 'Búsqueda', url: '/busqueda' },
    { title: 'Mi Librería', url: '/mi-libreria' },
    { title: 'Lobby', url: '/lobby' },
  ];

  constructor(private camera: Camera) {}

  openCamera() {
  
  }
}

