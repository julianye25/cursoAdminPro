import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'progressBar', url: '/progress' },
        { titulo: 'graficas', url: '/graficas1' },
        { titulo: 'promesas', url: '/promesas' },
        { titulo: 'rxjs', url: '/rxjs' },
      ],
    },
  ];

  constructor() {}
}
