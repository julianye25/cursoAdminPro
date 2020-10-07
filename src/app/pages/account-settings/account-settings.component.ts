import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(Tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustes.aplicarTema( Tema );
  }

  aplicarCheck( link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for(let ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let Tema = this._ajustes.ajustes.Tema;

    for(let ref of selectores) {
      if(ref.getAttribute('data-theme') === Tema) {
        ref.classList.add('working');
      }
      break;
    }
  }
}
