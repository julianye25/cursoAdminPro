import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contar3()
      .then(() => console.log('termino'))
      .catch((error) => console.error('Error en la promesa', error));
  }

  ngOnInit(): void {}

  contar3(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;

      // tslint:disable-next-line: prefer-const
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
