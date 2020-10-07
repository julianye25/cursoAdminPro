import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: Ajustes = {
  temaUrl: 'assets/css/colors/default.css',
  Tema: 'default'
}

  constructor(@Inject(DOCUMENT) private _document, ) {
    this.cargarAjustes();
  }

  guardarAjustes() {


    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.Tema);
    } else {
           this.aplicarTema(this.ajustes.Tema);
    }
  }

  aplicarTema(Tema: string) {
    const url = `/assets/css/colors/${Tema}.css`;
    this._document.getElementById('Tema').setAttribute('href', url);

    this.ajustes.Tema = Tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  Tema: string;
}
